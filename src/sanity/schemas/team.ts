import { defineType, defineField } from 'sanity'

export const teamSchema = defineType({
  name: 'team',
  title: 'Team Members',
  type: 'document',
  icon: () => '👥',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'e.g. SB',
    }),
    defineField({
      name: 'colorClass',
      title: 'Color Class',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Green)', value: 'bg-primary text-white' },
          { title: 'Accent (Orange)', value: 'bg-accent text-white' },
          { title: 'Secondary (Dark Green)', value: 'bg-secondary text-white' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'bg-primary text-white',
    }),
  ],
})
