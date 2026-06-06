import { createClient } from '@sanity/client'
import { createReadStream, readdirSync, statSync } from 'fs'
import { join, basename } from 'path'

const projectId = 'e72rjnya'
const dataset = 'production'
const apiVersion = '2024-01-01'

// The sanity exec command provides a client, but we can also build one.
// Actually, `sanity exec` doesn't pass the client as a global. We just initialize it with a token.
// Since we don't have the token in code, we import the configured client from 'part:@sanity/base/client' (v2) or 'sanity' (v3).
// Wait, Sanity v3 uses 'sanity/cli' getCliClient.
import { getCliClient } from 'sanity/cli'

async function uploadImages() {
  const client = getCliClient()
  const publicImagesDir = join(process.cwd(), 'public', 'images')
  
  const foldersToUpload = [
    { dir: 'Residential', category: 'Residential' },
    { dir: 'School', category: 'School' },
    { dir: 'Lab furniture', category: 'Lab Furniture' }
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
          
          // 2. Create the galleryImage document
          const doc = {
            _type: 'galleryImage',
            title: folder.category + ' - ' + basename(file, extname(file)),
            category: folder.category,
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
        }
      }
    } catch (err) {
      console.error(`Error processing folder ${folder.dir}:`, (err as Error).message)
    }
  }
  
  console.log('Upload complete!')
}

import { extname } from 'path'
uploadImages().catch(console.error)
