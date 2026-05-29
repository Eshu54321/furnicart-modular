import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the image',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Optional category to help filter images (e.g., Workstations, Partitions)',
      options: {
        list: [
          { title: 'Workstation', value: 'Workstation' },
          { title: 'Office Partition', value: 'Office Partition' },
          { title: 'Executive Cabin', value: 'Executive Cabin' },
          { title: 'Conference Room', value: 'Conference Room' },
          { title: 'Storage', value: 'Storage' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Optional number to control the order in which images appear (lower numbers appear first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
    },
    prepare({ title, media, category }) {
      return {
        title: title || 'Untitled Image',
        subtitle: category || 'Uncategorized',
        media,
      }
    },
  },
})
