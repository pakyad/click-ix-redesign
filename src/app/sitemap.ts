import type { MetadataRoute } from 'next'
import { routes } from '@/lib/routes'

/**
 * Every implemented route, from the registry that already drives navigation.
 * A planned route never appears here: the sitemap cannot claim a page that does
 * not exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://click-ix.com'

  return Object.values(routes)
    .filter((route) => route.status === 'implemented')
    .map((route) => ({
      url: `${base}${route.path}`,
      changeFrequency: route.path === '/' ? 'weekly' : 'monthly',
      priority: route.path === '/' ? 1 : 0.7,
    }))
}
