import type { Metadata } from 'next'
import PageHeader from '@/components/layout/PageHeader'
import Link from 'next/link'
import { commercialFlow, deliverySteps } from '@/lib/content'
import { routes } from '@/lib/routes'
import styles from './process.module.css'
import { mailto } from '@/lib/contact'

const route = routes.ourProcess

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

export default function OurProcessPage() {
  return (
    <main id="main-content" className={styles.page}>
            <PageHeader
        eyebrow="Process"
        title="From first audit"
        quiet="to live network."
        lede="A screen network is not a product drop. It is an estate with mixed hardware, a sales team, finance, advertisers and a support obligation. The method is built to surface the hard parts early."
        contents={['Discovery & audit', 'Compatibility & design', 'Pilot', 'Rollout & support']}
      />

      <section className="section--light">
        <div className="wrap">
          <div className={styles.intro}>
            <div>
              <h2 className="h2">Four steps, in this order.</h2>
            </div>
            <p className="lede">
              The sequence exists to avoid the usual failure: installing first and discovering the controller,
              booking or reporting gap afterwards.
            </p>
          </div>

          <ol className={styles.steps}>
            {deliverySteps.map((step) => (
              <li key={step.step} className={styles.step}>
                <span className={styles.stepIndex}>{step.step}</span>
                <h3 className={styles.stepName}>{step.name}</h3>
                <p className={styles.stepDetail}>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section--dark">
        <div className="wrap">
          <div className={styles.flowHead}>
            <div>
              <h2 className="h2">Sell → Schedule → Play → Prove → Bill.</h2>
            </div>
            <p className="lede">
              One booking, five systems, no re-entry. This is the sequence the stack is built around.
            </p>
          </div>

          <ol className={styles.flow}>
            {commercialFlow.map((item) => (
              <li key={item.step} className={styles.flowStep}>
                <span className={styles.flowStepName}>{item.step}</span>
                <span className={styles.flowSystem}>{item.system}</span>
                <p className={styles.flowDetail}>{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section--light">
        <div className={`wrap ${styles.audit}`}>
          <div>
            <h2 className="h2">What we need to see.</h2>
          </div>
          <div className={styles.auditGrid}>
            <ul className={styles.auditList}>
              <li>Every screen, its location and resolution</li>
              <li>The PC, media player or controller behind it</li>
              <li>Whether the controller exposes an external HDMI input</li>
              <li>Who sells, approves and invoices the inventory</li>
              <li>What proof an advertiser currently receives</li>
            </ul>
            <div className={styles.auditNote}>
              <p>
                CS Play runs on most LED controllers and Android or Windows players. Controllers locked to a
                proprietary OS without external HDMI input are the main hardware-audit risk — and the reason the
                audit comes before the proposal.
              </p>
              <Link href={mailto('Enquiry')} className="btn btn--dark">
                Start a compatibility review <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section--dark">
        <div className={`wrap ${styles.end}`}>
          <p className="h3">Need the product detail behind the process?</p>
          <div className={styles.endActions}>
            <Link href="/software/" className="link-arrow">
              See the stack
            </Link>
            <Link href="/case-studies/" className="link-arrow">
              See deployments
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
