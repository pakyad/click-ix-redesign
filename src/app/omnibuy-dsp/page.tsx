import type { Metadata } from 'next'
import ProductDetail from '@/components/product/ProductDetail'
import { routes } from '@/lib/routes'

const route = routes.omnibuyDsp

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

export default function OmniBuyDspPage() {
  return <ProductDetail productId="omnibuy-dsp" />
}
