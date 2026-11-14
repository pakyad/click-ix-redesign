import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://click-ix.com/sitemap.xml',
    host: 'https://click-ix.com',
  }
}
