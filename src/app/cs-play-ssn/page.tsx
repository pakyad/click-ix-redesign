import type { Metadata } from 'next'
import ProductDetail from '@/components/product/ProductDetail'
import { routes } from '@/lib/routes'

const route = routes.csPlaySsn

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

export default function CsPlaySsnPage() {
  return <ProductDetail productId="cs-play-ssn" />
}
