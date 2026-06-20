import { getCliClient } from 'sanity/cli'

async function fixProducts() {
  const client = getCliClient()
  
  // Fetch all products
  const products = await client.fetch(`*[_type == "product"]{_id, description, image, shortDescription, mainImage, isAvailable}`)
  
  console.log(`Found ${products.length} products to check.`)
  
  for (const product of products) {
    const patch = client.patch(product._id)
    let needsPatch = false

    if (product.isAvailable !== true) {
      patch.set({ isAvailable: true })
      needsPatch = true
    }
    
    if (product.description && !product.shortDescription) {
      patch.set({ shortDescription: product.description })
      needsPatch = true
    }
    
    if (product.image && !product.mainImage) {
      patch.set({ mainImage: product.image })
      needsPatch = true
    }

    if (needsPatch) {
      await patch.commit()
      console.log(`Fixed product ${product._id}`)
    }
  }
  
  console.log('Fix complete!')
}

fixProducts().catch(console.error)
