import type { Metadata } from 'next'
import Link from 'next/link'
import { commercialFlow, coreProducts, platformRows, products, supportingProducts } from '@/lib/content'
import ProductMark, { hasMark } from '@/components/brand/ProductMark'
import FlowLine from '@/components/product/FlowLine'
import styles from './products.module.css'
import { mailto } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Products | Click iX',
  description:
    'One stack for the whole screen network: CS Deals, CS Play, CS Play SSN, CS Sign Hub, OmniBuy DSP, CS Context, measurement and data partnerships.',
  alternates: { canonical: '/software/' },
}

const tick = <span aria-hidden="true">●</span>
const cross = <span aria-hidden="true" className={styles.no}>—</span>

const productRoutes: Record<string, string> = {
  'cs-deals': '/cs-deals/',
  'cs-play': '/cs-play/',
  'cs-play-ssn': '/cs-play-ssn/',
  'cs-sign-hub': '/cs-sign-hub/',
  'omnibuy-dsp': '/omnibuy-dsp/',
  ssp: '/cs-context/',
  measurement: '/measurement/',
}

const signHub = products.find((product) => product.id === 'cs-sign-hub')!

const groups = [
  { items: coreProducts },
  { items: supportingProducts },
  { items: [signHub] },
]

export default function SoftwarePage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.heroSection}>
        <div className={`wrap ${styles.hero}`}>
          <h1 className={`display ${styles.heroTitle}`}>One stack for the whole screen network.</h1>
          <p className={styles.statement}>
            Click iX builds and maintains every layer in-house: the ERP and CRM that sell inventory, the CMS
            that plays content, the pipes that bring in programmatic demand, and the measurement that proves
            an audience was there.
          </p>
        </div>
      </section>

      <section className={styles.indexSection} aria-label="The eight products">
        <div className="wrap">
          {groups.map((group, index) => (
            <div key={index} className={styles.group}>
              {group.items.map((product) => {
                const href = productRoutes[product.id]

                return (
                  <article key={product.id} className={styles.row}>
                    <div className={styles.rowTitle}>
                      <div className={styles.markSlot}>
                        {hasMark(product.id) ? (
                          <ProductMark
                            productId={product.id}
                            label={product.name}
                            variant="chip"
                            height={56}
                          />
                        ) : null}
                      </div>

                      <div className={styles.titleText}>
                        <h2 className={styles.rowName}>
                          {href ? (
                            <Link href={href} className={styles.rowLink}>
                              {product.name}
                            </Link>
                          ) : (
                            product.name
                          )}
                        </h2>
                        <p className={styles.rowRole}>{product.role}</p>
                      </div>
                    </div>

                    <div className={styles.rowBody}>
                      <p>{product.summary}</p>

                      <details className={styles.details}>
                        <summary>
                          {product.screens ? 'Capabilities and screens' : 'Capabilities'}
                        </summary>
                        <ul>
                          {product.capabilities.map((capability) => (
                            <li key={capability}>{capability}</li>
                          ))}
                        </ul>
                        {product.screens ? (
                          <p className={styles.screens}>
                            <span>Runs on</span> {product.screens.join(' · ')}
                          </p>
                        ) : null}
                      </details>
                    </div>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.appendix} aria-labelledby="map-title">
        <div className="wrap">
          <h2 id="map-title" className="h2">
            Every screen has a home.
          </h2>
          <p className={styles.note}>
            CS Deals sits across everything, including static media. CS Play handles mass-facing screens; CS
            Play SSN handles indoor, commercialised small screens.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.map}>
              <caption className="sr-only">
                Screen asset types and the Click iX platforms that manage them
              </caption>
              <thead>
                <tr>
                  <th scope="col">Asset type</th>
                  <th scope="col">CS Play</th>
                  <th scope="col">CS Play SSN</th>
                  <th scope="col">CS Deals</th>
                </tr>
              </thead>
              <tbody>
                {platformRows.map((row) => (
                  <tr key={row.asset}>
                    <th scope="row">{row.asset}</th>
                    <td>{row.play ? tick : cross}</td>
                    <td>{row.ssn ? tick : cross}</td>
                    <td>{row.deals ? tick : cross}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.flowSection} aria-labelledby="flow-title">
        <div className="wrap">
          <h2 id="flow-title" className="h2">
            Sell, schedule, play, prove, bill.
          </h2>
          <p className={styles.note}>
            The same booking moves through the whole stack. No re-entry between sales, playback, proof and
            finance.
          </p>

          <FlowLine steps={commercialFlow} />
        </div>
      </section>

      <section className={styles.end}>
        <div className="wrap">
          <div className={styles.endInner}>
            <h2 className={styles.endTitle}>Not sure which platform your estate needs?</h2>
            <div className={styles.endActions}>
              <Link href={mailto('Enquiry')} className="btn">
                Start a compatibility review
              </Link>
              <Link href="/hardware/" className={styles.endLink}>
                Check hardware requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
