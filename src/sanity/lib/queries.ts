export const ALL_PRODUCTS_QUERY = `
  *[_type == "product" && isAvailable == true] | order(isFeatured desc, name asc) {
    _id, name, slug, subtitle, features, category, isFeatured,
    shortDescription, priceRange, leadTime,
    specifications,
    mainImage { asset->, alt },
    "galleryCount": count(gallery)
  }
`

export const FEATURED_PRODUCTS_QUERY = `
  *[_type == "product" && isAvailable == true && isFeatured == true]
  | order(name asc) [0...6] {
    _id, name, slug, category, shortDescription,
    mainImage { asset->, alt }
  }
`

export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(completionDate desc) {
    _id, title, slug, category, location,
    clientType, shortDescription, isFeatured,
    completionDate, projectValue,
    scope, materials, executionTime,
    coverImage { asset->, alt },
    gallery[] { asset->, alt }
  }
`

export const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && isFeatured == true]
  | order(completionDate desc) [0...6] {
    _id, title, slug, category, location,
    coverImage { asset->, alt }
  }
`

export const ALL_TEAM_QUERY = `
  *[_type == "team"] | order(_createdAt asc) {
    _id, name, role, description, initials, colorClass
  }
`

export const ALL_GALLERY_IMAGES_QUERY = `
  *[_type == "galleryImage"] | order(order asc, _createdAt desc) {
    _id, title, category, order,
    image { asset->, alt }
  }
`
