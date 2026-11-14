import type { Metadata } from 'next'
import { routes } from '@/lib/routes'
import CaseCategoryPage from '@/components/interior/CaseCategoryPage'

const route = routes.caseStudiesFmcgOthers

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

export default function CategoryPage() {
  return <CaseCategoryPage categoryId="fmcg-others" />
}
