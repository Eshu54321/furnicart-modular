import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e72rjnya',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  },
  deployment: {
    appId: 'b1gs0err6yjb1gyht7q5rw6c',
  }
})
