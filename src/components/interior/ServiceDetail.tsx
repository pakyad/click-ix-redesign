import Link from 'next/link'
import { getRoute } from '@/lib/routes'
import type { ServiceEntry } from '@/lib/catalog'
import { serviceFor } from '@/lib/content'
import PageHeader from '@/components/layout/PageHeader'
import styles from './ServiceDetail.module.css'
import { mailto } from '@/lib/contact'

export default function ServiceDetail({ service }: { service: ServiceEntry }) {
  const route = getRoute(service.routeId)
  const detail = serviceFor(service.routeId as Parameters<typeof serviceFor>[0])

  return (
    <main id="main-content" className={styles.page}>
      <PageHeader
        eyebrow=""
        title={route.label}
        lede={service.line}
        back={{ href: '/our-services/', label: 'All services' }}
      />

      <section className="section--light">
        <div className={`wrap ${styles.grid}`}>
          <div>
            <h2 className="h2">What Click iX does.</h2>
            <p className={styles.intro}>{service.intro}</p>
          </div>
          <ul className={styles.scope}>
            {detail.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={`wrap ${styles.noteRow}`}>
          <p className={styles.noteLabel}>Honest limit</p>
          <p className={styles.note}>{detail.limit}</p>
        </div>
      </section>

      <section className="section--dark">
        <div className={`wrap ${styles.connect}`}>
          <div>
            <h2 className="h2">This service sits next to the software.</h2>
            <p className="lede">
              Every service connects back to the platforms that run the network. The work is not a separate
              consultancy track.
            </p>
            <Link href="/software/" className="link-arrow">
              See the product stack <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className={styles.related}>
            {service.related.map((id) => {
              const related = getRoute(id)
              return (
                <li key={id}>
                  <Link href={related.path} className={styles.relatedLink}>
                    <span>{related.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              )
            })}
            <li>
              <Link href={mailto('Enquiry')} className={styles.relatedLink}>
                <span>Start a compatibility review</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
