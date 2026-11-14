import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import ProductMark, { hasMark } from '@/components/brand/ProductMark'
import {
  caseCategories,
  caseStudies,
  commercialFlow,
  platformRows,
  products,
  type Product,
} from '@/lib/content'
import styles from './ProductDetail.module.css'
import { mailto } from '@/lib/contact'

const ROUTE_BY_PRODUCT: Record<string, string> = {
  'cs-deals': '/cs-deals/',
  'cs-play': '/cs-play/',
  'cs-play-ssn': '/cs-play-ssn/',
  'cs-sign-hub': '/cs-sign-hub/',
  'omnibuy-dsp': '/omnibuy-dsp/',
  ssp: '/cs-context/',
  measurement: '/measurement/',
}

const RELATED: Record<string, readonly string[]> = {
  'cs-deals': ['cs-play', 'cs-play-ssn', 'measurement'],
  'cs-play': ['cs-play-ssn', 'cs-deals', 'ssp'],
  'cs-play-ssn': ['cs-play', 'cs-deals', 'cs-sign-hub'],
  'omnibuy-dsp': ['ssp', 'cs-play', 'measurement'],
  ssp: ['cs-deals', 'omnibuy-dsp', 'measurement'],
  measurement: ['cs-play', 'cs-deals', 'ssp'],
}

const PLATFORM_KEY: Record<string, 'play' | 'ssn' | 'deals'> = {
  'cs-play': 'play',
  'cs-play-ssn': 'ssn',
  'cs-deals': 'deals',
}

const FLOW_STEPS: Record<string, readonly string[]> = {
  'cs-deals': ['Sell', 'Bill'],
  'cs-play': ['Schedule', 'Play'],
  'cs-play-ssn': ['Schedule', 'Play'],
  measurement: ['Prove'],
}

function product(id: string): Product {
  const found = products.find((entry) => entry.id === id)
  if (!found) throw new Error(`Unknown product: ${id}`)
  return found
}

export default function ProductDetail({ productId }: { readonly productId: string }) {
  const item = product(productId)
  const related = (RELATED[productId] ?? []).map(product)
  const flow = FLOW_STEPS[productId] ?? []
  const platformKey = PLATFORM_KEY[productId]
  const rows = platformKey ? platformRows.filter((row) => row[platformKey]) : []
  const cases = caseStudies.filter((study) =>
    study.systems.some((system) => system.toLowerCase() === item.name.toLowerCase()),
  )

  return (
    <main id="main-content" className={styles.page}>
      <PageHeader
        eyebrow=""
        title={item.name}
        lede={item.summary}
        back={{ href: '/software/', label: 'All products' }}
        facts={[
          { label: 'Role', value: item.role },
          { label: 'Built for', value: item.audience },
          { label: 'Built by', value: 'Click iX, in-house' },
        ]}
      />

      <section className="section--light">
        <div className={`wrap ${styles.intro}`}>
          <div>
            <h2 className="h2">The job, in full.</h2>
            {hasMark(productId) ? (
              <p className={styles.mark}>
                <ProductMark productId={productId} label={item.name} height={34} />
              </p>
            ) : null}
            <p className={styles.summary}>{item.summary}</p>
          </div>

          <ul className={styles.capabilities}>
            {item.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      {rows.length > 0 ? (
        <section className="section--dark" aria-labelledby="runs-title">
          <div className={`wrap ${styles.mapWrap}`}>
            <div>
              <h2 id="runs-title" className="h2">
                The screens it covers.
              </h2>
            </div>
            <table className={styles.map}>
              <caption className={styles.srOnly}>Screen types covered by {item.name}</caption>
              <thead>
                <tr>
                  <th scope="col">Asset type</th>
                  <th scope="col">Covered</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.asset}>
                    <th scope="row">{row.asset}</th>
                    <td aria-label="Covered">●</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {flow.length > 0 ? (
        <section className="section--light" aria-labelledby="flow-title">
          <div className="wrap">
            <div className={styles.flowHead}>
              <h2 id="flow-title" className="h2">
                One step in the commercial loop.
              </h2>
            </div>
            <ol className={styles.flow}>
              {commercialFlow.map((step) => (
                <li key={step.step} data-on={flow.includes(step.step) ? 'true' : 'false'}>
                  <span className={styles.flowStep}>{step.step}</span>
                  <span className={styles.flowSystem}>{step.system}</span>
                  <span className={styles.flowDetail}>{step.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <section className="section--light" aria-labelledby="related-title">
        <div className="wrap">
          <div className={styles.relatedHead}>
            <h2 id="related-title" className="h2">
              The next layer.
            </h2>
          </div>
          <ul className={styles.related}>
            {related.map((entry) => (
              <li key={entry.id}>
                <Link href={ROUTE_BY_PRODUCT[entry.id] ?? '/software/'}>
                  <ProductMark productId={entry.id} label={entry.name} height={24} />
                  <span className={styles.relatedName}>{entry.name}</span>
                  <span className={styles.relatedRole}>{entry.role}</span>
                  <span className={styles.relatedArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {cases.length > 0 ? (
        <section className="section--dark" aria-labelledby="proof-title">
          <div className={`wrap ${styles.proof}`}>
            <div>
              <h2 id="proof-title" className="h2">
                Where it is running.
              </h2>
            </div>
            <ul className={styles.caseList}>
              {cases.map((study) => {
                const category = caseCategories.find((entry) => entry.id === study.category)
                return (
                  <li key={study.id}>
                    <Link href={category?.route ?? '/case-studies/'}>
                      <span className={styles.caseClient}>{study.client}</span>
                      <span className={styles.caseTitle}>{study.title}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section--light">
        <div className={`wrap ${styles.end}`}>
          <div>
            <h2 className="h2">Put your screens on it.</h2>
          </div>
          <div className={styles.endActions}>
            <Link href={mailto('Product enquiry')} className="btn">
              Start a review <span aria-hidden="true">→</span>
            </Link>
            <Link href="/software/" className="link-arrow">
              Compare the stack
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
