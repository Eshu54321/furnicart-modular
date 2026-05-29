import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'furnicart',
  title: 'Furnicart CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e72rjnya',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Furnicart Content')
          .items([
            S.listItem()
              .title('🛋 Products')
              .child(S.documentTypeList('product')),
            S.listItem()
              .title('🏢 Projects & Portfolio')
              .child(S.documentTypeList('project')),
            S.listItem()
              .title('👥 Team Members')
              .child(S.documentTypeList('team')),
            S.listItem()
              .title('🖼️ Gallery Images')
              .child(S.documentTypeList('galleryImage')),
          ])
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
