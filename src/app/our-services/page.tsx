import type { Metadata } from 'next'
import PageHeader from '@/components/layout/PageHeader'
import Link from 'next/link'
import { routes } from '@/lib/routes'
import { serviceCatalog } from '@/lib/catalog'
import { serviceFor, deliverySteps } from '@/lib/content'
import styles from './services.module.css'
import { mailto } from '@/lib/contact'

const route = routes.ourServices

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

export default function OurServicesPage() {
  return (
    <main id="main-content" className={styles.page}>
            <PageHeader
        eyebrow="Services"
        title="Services around"
        quiet="the software."
        lede="Seven ways Click iX works with a screen estate before, during and after deployment. The software is the constant; the service is how it gets installed, fed and used."
        contents={['Strategy', 'Project management', 'Journey mapping', 'Solution mapping', 'Content', 'Analytics', 'Interactive']}
      />

      <section className="section--light">
        <div className="wrap">
          <div className={styles.intro}>
            <div>
              <h2 className="h2">From the first question to the running network.</h2>
            </div>
            <p className="lede">
              Every service is delivered by the same team that builds and runs the software.
            </p>
          </div>

          <ul className={styles.list}>
            {serviceCatalog.map((service) => {
              const entry = routes[service.routeId]
              const detail = serviceFor(service.routeId as Parameters<typeof serviceFor>[0])
              return (
                <li key={service.routeId} className={styles.row}>
                  <div className={styles.rowHead}>
                    <h3 className={styles.rowTitle}>{entry.label}</h3>
                    <p className={styles.rowLine}>{service.line}</p>
                  </div>
                  <ul className={styles.rowScope} aria-label={`Scope for ${entry.label}`}>
                    {detail.scope.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href={entry.path} className={styles.rowLink} aria-label={`Explore ${entry.label}`}>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <p className={styles.hardwareNote}>
            Hardware is presented under Products, not as an eighth service. The flat{' '}
            <Link href="/hardware/">hardware route</Link> remains available.
          </p>
        </div>
      </section>

      <section className="section--paper" aria-labelledby="delivery-title">
        <div className="wrap">
          <h2 id="delivery-title" className="h2">
            How a network goes live.
          </h2>

          <ol className={styles.delivery}>
            {deliverySteps.map((step) => (
              <li key={step.step} className={styles.deliveryStep}>
                <span className={styles.deliveryName}>{step.name}</span>
                <p className={styles.deliveryDetail}>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section--dark">
        <div className={`wrap ${styles.end}`}>
          <div>
            <h2 className="h2">Bring the screen list.</h2>
            <p className="lede">
              The useful first conversation is about what exists: locations, players, controllers and who
              approves content.
            </p>
          </div>
          <div className={styles.endActions}>
            <Link href={mailto('Enquiry')} className="btn">
              Start a review <span aria-hidden="true">→</span>
            </Link>
            <Link href="/our-process/" className="link-arrow">
              See the delivery method
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
