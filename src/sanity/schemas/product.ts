import { defineType, defineField } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: () => '🛋',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short catchy phrase (e.g. Ergonomic Collaborative Clusters)',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting product features',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Workstations', value: 'workstations' },
          { title: 'Modular Cabins', value: 'cabins' },
          { title: 'Conference Tables', value: 'conference' },
          { title: 'Storage Units', value: 'storage' },
          { title: 'Full-Height Partitions', value: 'partitions' },
          { title: 'Executive Furniture', value: 'executive' },
          { title: 'Modular Kitchens', value: 'kitchens' },
          { title: 'Wardrobes', value: 'wardrobes' },
          { title: 'TV Units', value: 'tv-units' },
          { title: 'Residential', value: 'residential' },
          { title: 'School', value: 'school' },
          { title: 'Lab Furniture', value: 'lab-furniture' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required().max(120),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Image Description (Alt Text)',
          type: 'string',
        })
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Additional Photos',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          defineField({
            name: 'alt',
            title: 'Image Description',
            type: 'string',
          })
        ]
      }],
      validation: Rule => Rule.max(8),
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'value', title: 'Value', type: 'string' }),
        ],
        preview: {
          select: { title: 'label', subtitle: 'value' }
        }
      }],
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'leadTime',
      title: 'Delivery Lead Time',
      type: 'string',
    }),
    defineField({
      name: 'isAvailable',
      title: 'Currently Available?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Category: ${subtitle}`,
        media,
      }
    }
  },
})
