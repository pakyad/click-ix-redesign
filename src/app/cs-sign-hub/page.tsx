import type { Metadata } from 'next'
import PageHeader from '@/components/layout/PageHeader'
import Link from 'next/link'
import { products } from '@/lib/content'
import { routes } from '@/lib/routes'
import styles from './signhub.module.css'
import { mailto } from '@/lib/contact'

const route = routes.csSignHub
const product = products.find((entry) => entry.id === 'cs-sign-hub')!

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

export default function CsSignHubPage() {
  return (
    <main id="main-content" className={styles.page}>
            <PageHeader
        eyebrow="Separate product"
        title="CS Sign Hub"
        quiet="for screens you do not sell."
        lede={product.summary}
        back={{ href: '/software/', label: 'All products' }}
      />

      <section className="section--light">
        <div className={`wrap ${styles.split}`}>
          <div>
            <h2 className="h2">The screens that are not for sale.</h2>
            <p className={styles.copy}>
              Not every screen carries advertising. Menus, directories and corporate notices have their own
              approval path, their own update rhythm and often their own team. CS Sign Hub is built for that job,
              separate from the advertising stack.
            </p>
            <ul className={styles.scope}>
              {product.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>

          <figure className={styles.demo}>
            <div className={styles.demoBody} aria-hidden="true">
              <div className={styles.demoNav}>
                <span className={styles.demoBrand}>CS Sign Hub</span>
                <span>Menus</span>
                <span>Directory</span>
                <span>Notices</span>
              </div>
              <div className={styles.demoGrid}>
                <div className={styles.demoPanel}>
                  <span className={styles.demoPanelLabel}>Directory</span>
                  <i style={{ width: '82%' }} />
                  <i style={{ width: '64%' }} />
                  <i style={{ width: '74%' }} />
                </div>
                <div className={styles.demoPanel}>
                  <span className={styles.demoPanelLabel}>Menu</span>
                  <i style={{ width: '70%' }} />
                  <i style={{ width: '52%' }} />
                  <i style={{ width: '64%' }} />
                </div>
                <div className={styles.demoPanel}>
                  <span className={styles.demoPanelLabel}>Notice</span>
                  <i style={{ width: '86%' }} />
                  <i style={{ width: '58%' }} />
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section className="section--dark">
        <div className={`wrap ${styles.deploy}`}>
          <div>
            <h2 className="h2">Cloud by default. On-premise when required.</h2>
          </div>
          <ul className={styles.deployList}>
            <li>
              <span className="meta">Hosting</span>
              <p>Cloud SaaS by default, with an on-premise option.</p>
            </li>
            <li>
              <span className="meta">Players</span>
              <p>Runs on Windows and Android players.</p>
            </li>
            <li>
              <span className="meta">Content</span>
              <p>Menus, directories and corporate screens.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section--light">
        <div className={`wrap ${styles.separation}`}>
          <div>
            <h2 className="h2">Two products. Two jobs.</h2>
            <p className={styles.copy}>
              CS Play schedules paid campaigns and proves they played. CS Sign Hub manages in-house content. They
              are not interchangeable, and this page makes no shared feature claims.
            </p>
            <Link href="/software/" className="link-arrow">
              Compare the product stack <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles.compare}>
            <div className={styles.compareRow}>
              <span className={styles.compareName}>CS Play</span>
              <span>Advertising loops, proof-of-play, campaign scheduling</span>
            </div>
            <div className={styles.compareRow}>
              <span className={styles.compareName}>CS Sign Hub</span>
              <span>Menus, directories, corporate screens, internal content</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section--dark">
        <div className={`wrap ${styles.end}`}>
          <p className="h3">Need a real product walkthrough?</p>
          <div className={styles.endActions}>
            <Link href={mailto('Enquiry')} className="btn">
              Ask for a demonstration <span aria-hidden="true">→</span>
            </Link>
            <Link href="/case-studies-medical-pharma/" className="link-arrow">
              See hospital deployments
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
