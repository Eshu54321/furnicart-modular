import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Project / Portfolio',
  type: 'document',
  icon: () => '🏢',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          { title: 'Workstation', value: 'Workstation' },
          { title: 'Office Partition', value: 'Office Partition' },
          { title: 'Executive Cabin', value: 'Executive Cabin' },
          { title: 'Conference Room', value: 'Conference Room' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Residential', value: 'Residential' },
          { title: 'School', value: 'School' },
          { title: 'Lab Furniture', value: 'Lab Furniture' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
      options: { dateFormat: 'MMMM YYYY' },
    }),
    defineField({
      name: 'location',
      title: 'Project Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'scope',
      title: 'Scope of Work',
      type: 'string',
    }),
    defineField({
      name: 'materials',
      title: 'Materials Used',
      type: 'string',
    }),
    defineField({
      name: 'executionTime',
      title: 'Execution Time',
      type: 'string',
      description: 'e.g. 25 Days',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.max(140),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Project Story',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover / Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Photo Gallery',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
        ]
      }],
      validation: Rule => Rule.max(12),
    }),
    defineField({
      name: 'productsUsed',
      title: 'Products Used in This Project',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'product' }]
      }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: `📍 ${subtitle}`, media }
    }
  },
})
