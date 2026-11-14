import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/layout/PageHeader'
import Link from 'next/link'
import { company } from '@/lib/content'
import { CONTACT, mailto } from '@/lib/contact'
import CopyEmail from '@/components/interior/CopyEmail'
import { routes } from '@/lib/routes'
import styles from './about.module.css'

const route = routes.about

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

const facts = [
  { label: 'Incorporated', value: '2022' },
  { label: 'Based in', value: 'Kuala Lumpur, Malaysia' },
  { label: 'Markets', value: 'Malaysia, Southeast Asia and the Middle East' },
  { label: 'Team experience', value: 'More than two decades in the industry' },
]

export default function AboutPage() {
  return (
    <main id="main-content" className={styles.page}>
            <PageHeader
        eyebrow="About Click iX"
        title="The company"
        quiet="behind the screens."
        lede={company.summary}
        facts={facts}
      />

      <section className="section--dark">
        <div className={`wrap ${styles.statement}`}>
          <p className={styles.bigStatement}>
            Every layer is built and maintained in-house — the CMS, the ERP and CRM, the programmatic pipes and
            the measurement.
          </p>
          <div className={styles.statementGrid}>
            <p>
              That matters when a network crosses vendors. The player on the wall, the booking in finance and the
              proof sent to an advertiser are usually three different systems. Click iX owns the seams between
              them.
            </p>
            <p>
              The software is hardware-agnostic: it runs on LED controllers, Android and Windows players across
              vendors. Where a controller is locked to a proprietary OS without an external HDMI input, that is
              found in the audit, not after the campaign goes live.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.photoBand} aria-label="On site">
        <div className="wrap">
          <figure className={styles.photoFigure}>
            <Image
              src="/media/building-led.jpg"
              alt="Technicians mounting a screen during a mall fit-out."
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              className={styles.photoImage}
            />
            <figcaption className={styles.photoCaption}>
              On site: mounting a screen during a fit-out.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section--light">
        <div className={`wrap ${styles.people}`}>
          <div>
            <h2 className="h2">The people accountable.</h2>
          </div>
          <ul className={styles.leaderList}>
            {company.leaders.map((leader) => (
              <li key={leader.name} className={styles.leader}>
                <span className={styles.leaderPortrait}>
                  <Image
                    src={leader.image}
                    alt={`Portrait of ${leader.name}`}
                    width={240}
                    height={240}
                    className={styles.leaderImage}
                  />
                </span>
                <span className={styles.leaderName}>{leader.name}</span>
                <span className={styles.leaderRole}>{leader.role}</span>
                <span className={styles.leaderFocus}>{leader.focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section--dark" aria-labelledby="contact-title">
        <div className={`wrap ${styles.contact}`}>
          <div>
            <h2 id="contact-title" className="h2">
              Start with what exists.
            </h2>
            <p className="lede">
              A screen list, a site, or a network that has stopped being manageable. That is enough for a
              first conversation — and every enquiry reaches the managing director.
            </p>
          </div>

          <div className={styles.contactCard}>
            <a href={mailto()} className={styles.email}>
              {CONTACT.email}
            </a>
            <CopyEmail value={CONTACT.email} />
            <p className={styles.contactNote}>
              Include where the screens are, what runs them, and what you want to change.
            </p>
            <Link href="/software/" className="link-arrow">
              See the product stack
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
