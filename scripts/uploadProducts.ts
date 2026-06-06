import { createClient } from '@sanity/client'
import { createReadStream, readdirSync, statSync } from 'fs'
import { join, basename, extname } from 'path'
import { getCliClient } from 'sanity/cli'

async function uploadProducts() {
  const client = getCliClient()
  const publicImagesDir = join(process.cwd(), 'public', 'images')
  
  const foldersToUpload = [
    { dir: 'Residential', category: 'residential' },
    { dir: 'School', category: 'school' },
    { dir: 'Lab furniture', category: 'lab-furniture' }
  ]

  for (const folder of foldersToUpload) {
    const dirPath = join(publicImagesDir, folder.dir)
    console.log(`Checking folder: ${dirPath}`)
    
    try {
      const files = readdirSync(dirPath)
      
      for (const file of files) {
        if (!file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) continue
        
        const filePath = join(dirPath, file)
        const stats = statSync(filePath)
        
        if (stats.isFile()) {
          console.log(`Uploading ${file} from ${folder.dir}...`)
          
          // 1. Upload the image asset
          const asset = await client.assets.upload('image', createReadStream(filePath), {
            filename: file
          })
          
          // Generate a slug from the filename
          const fileBase = basename(file, extname(file));
          const slugValue = `${folder.category}-${fileBase.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.substring(0, 96);
          
          // 2. Create the product document
          const doc = {
            _type: 'product',
            name: folder.dir + ' - ' + fileBase,
            slug: {
              _type: 'slug',
              current: slugValue
            },
            category: folder.category,
            isFeatured: false,
            description: `Premium ${folder.dir.toLowerCase()} designed for modern environments.`,
            features: [
              "High quality materials",
              "Durable construction",
              "Modern design"
            ],
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: asset._id
              }
            }
          }
          
          await client.create(doc)
          console.log(`Successfully created product document for ${file}`)
        }
      }
    } catch (err) {
      console.error(`Error processing folder ${folder.dir}:`, err.message)
    }
  }
  
  console.log('Upload complete!')
}

uploadProducts().catch(console.error)
