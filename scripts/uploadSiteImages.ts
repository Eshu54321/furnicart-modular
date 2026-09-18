import { createReadStream, readdirSync, statSync } from 'fs'
import { join, basename, extname } from 'path'
import { getCliClient } from 'sanity/cli'

async function uploadSiteImages() {
  const client = getCliClient()
  const publicImagesDir = join(process.cwd(), 'public', 'images', 'sites')
  
  console.log(`Scanning directory: ${publicImagesDir}`)
  
  let folders: string[] = []
  try {
    folders = readdirSync(publicImagesDir).filter(f => {
      const p = join(publicImagesDir, f)
      return statSync(p).isDirectory() && f !== 'site videos' // skip videos as requested
    })
  } catch (err) {
    console.error(`Failed to read sites directory: ${(err as Error).message}`)
    return
  }

  for (const folder of folders) {
    const dirPath = join(publicImagesDir, folder)
    console.log(`\nChecking folder: ${dirPath}`)
    
    try {
      const files = readdirSync(dirPath)
      let count = 0
      for (const file of files) {
        if (!file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) continue
        
        const filePath = join(dirPath, file)
        const stats = statSync(filePath)
        
        if (stats.isFile()) {
          console.log(`Uploading ${file} from ${folder}...`)
          
          // 1. Upload the image asset
          const asset = await client.assets.upload('image', createReadStream(filePath), {
            filename: file
          })
          
          // 2. Create the galleryImage document
          const doc = {
            _type: 'galleryImage',
            title: folder + ' - ' + basename(file, extname(file)),
            category: folder,
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: asset._id
              }
            }
          }
          
          await client.create(doc)
          console.log(`Successfully created document for ${file}`)
          count++
        }
      }
      console.log(`Finished folder ${folder}: Uploaded ${count} images.`)
    } catch (err) {
      console.error(`Error processing folder ${folder}:`, (err as Error).message)
    }
  }
  
  console.log('\nUpload complete!')
}

uploadSiteImages().catch(console.error)
