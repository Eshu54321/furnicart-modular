'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../../sanity.config'
import { use } from 'react'

// Using React's use() to unwrap the params promise as required by Next.js 16
export default function StudioPage({ params }: { params: Promise<{ tool?: string[] }> }) {
  const unwrappedParams = use(params)
  
  return <NextStudio config={config} />
}
