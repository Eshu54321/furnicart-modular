import { getCliClient } from 'sanity/cli'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join, basename, extname } from 'path'

const client = getCliClient()

const categoryMap: Record<string, string> = {
  'Cabin Furniture': 'Executive Cabin',
  'Conference-Meeting table': 'Conference Room',
  'Desking workstations': 'Workstation',
  'Full height partition 80mm thk': 'Office Partition',
  'Storages': 'Storage',
  'Workstations and cubicles with 4ft partitions': 'Workstation',
}

async function uploadImages() {
  const imagesPath = join(process.cwd(), 'public', 'images')
  const folders = readdirSync(imagesPath)

  for (const folder of folders) {
    const folderPath = join(imagesPath, folder)
    if (!statSync(folderPath).isDirectory() || folder === 'Manufacturing unit') continue;

    const category = categoryMap[folder] || 'Other'
    const files = readdirSync(folderPath)

    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;
      
      const filePath = join(folderPath, file)
      console.log(`Uploading ${folder}/${file}...`)
      
      try {
        const buffer = readFileSync(filePath)
        
        // 1. Upload asset
        const asset = await client.assets.upload('image', buffer, {
          filename: file,
        })

        // 2. Create document
        await client.create({
          _type: 'galleryImage',
          title: basename(file, extname(file)),
          category: category,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id
            }
          }
        })
        console.log(`Success: Created gallery document for ${file}`)
      } catch (err) {
        console.error(`Failed to upload ${file}:`, err)
      }
    }
  }
  console.log("Finished uploading all images!")
}

uploadImages().catch(console.error)
