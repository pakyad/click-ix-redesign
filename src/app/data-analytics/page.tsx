import type { Metadata } from 'next'
import { routes } from '@/lib/routes'
import { serviceCatalog } from '@/lib/catalog'
import ServiceDetail from '@/components/interior/ServiceDetail'

const route = routes.dataAnalytics
export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

export default function ServicePage() {
  const service = serviceCatalog.find(service => service.routeId === 'dataAnalytics')!
  return <ServiceDetail service={service} />
}
