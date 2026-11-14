import type { Metadata } from 'next'
import Link from 'next/link'
import { routes } from '@/lib/routes'
import styles from './hardware.module.css'
import { mailto } from '@/lib/contact'

const route = routes.hardware

export const metadata: Metadata = {
  title: 'Hardware | Click iX',
  description:
    'Screens, players and the parts between: outdoor LED, video walls, kiosks, menu boards, shelf strips, holographic displays and electronic shelf labels.',
  alternates: { canonical: route.path },
}

const catalogue = [
  {
    group: 'Outdoor',
    items: ['Outdoor LED', 'Pillar wraps', 'LED at highways', 'LED and kiosks at train stations'],
  },
  {
    group: 'Indoor',
    items: [
      'Indoor screens',
      'Video walls',
      'Indoor LED panels',
      'Menu-board signage',
      'Digital kiosks for wayfinding and gamification',
      'Shelf strips',
      'Tablets',
      'Custom-sized screens',
    ],
  },
  {
    group: 'Speciality',
    items: [
      'Holographic fans',
      'Holographic AI',
      'Encapsulated retail spaces',
      'Event livestreaming',
      'Electronic shelf labels',
    ],
  },
  {
    group: 'Ancillary',
    items: ['PCs', 'Media players', 'Sensors', 'Speakers', 'Internet connectivity', 'Routers'],
  },
] as const

export default function HardwarePage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className="section--dark section--flush">
        <div className={`wrap ${styles.hero}`}>
          <h1 className={`display ${styles.heroTitle}`}>Screens, players and the parts between.</h1>
          <p className="lede">
            The software is hardware-agnostic. When a project needs the physical layer, Click iX specifies and
            coordinates it — screens, players, controllers, mounting and connectivity.
          </p>
        </div>
      </section>

      <section className="section--light">
        <div className={`wrap ${styles.stance}`}>
          <div>
            <h2 className="h2">Software first. Hardware where it is needed.</h2>
          </div>
          <div className={styles.stanceCopy}>
            <p>
              A screen estate usually already has hardware from several vendors. Replacing all of it is rarely the
              right first move. The audit establishes what can run as-is and what needs a new player before any
              hardware is quoted.
            </p>
            <p>
              Where new hardware is required, specification follows the site: viewing distance, orientation,
              mounting surface, power, access and the content the screen must carry.
            </p>
          </div>
        </div>
      </section>

      <section className="section--paper" aria-labelledby="catalogue-title">
        <div className="wrap">
          <h2 id="catalogue-title" className="h2">
            What we specify.
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">What that covers</th>
                </tr>
              </thead>
              <tbody>
                {catalogue.map((group) => (
                  <tr key={group.group}>
                    <th scope="row">{group.group}</th>
                    <td>{group.items.join(' · ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section--light">
        <div className={`wrap ${styles.compat}`}>
          <div>
            <h2 className="h2">What the audit looks for.</h2>
          </div>
          <div className={styles.compatCopy}>
            <p>
              CS Play runs on most LED controllers and Android or Windows players. The main risk is a controller
              locked to a proprietary operating system without an external HDMI input. That is a hardware finding,
              not a software failure, and it is cheaper to find it in the audit.
            </p>
            <ul className={styles.checklist}>
              <li>Screen location, resolution and orientation</li>
              <li>PC, media player or controller behind each screen</li>
              <li>External HDMI input and network access</li>
              <li>Power, mounting and site access constraints</li>
            </ul>
            <Link href={mailto('Enquiry')} className="btn">
              Book a compatibility review <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section--paper">
        <div className={`wrap ${styles.end}`}>
          <p className="h3">Electronic shelf labels and custom formats?</p>
          <div className={styles.endActions}>
            <Link href={mailto('Enquiry')} className="link-arrow">
              Ask about a specification
            </Link>
            <Link href="/software/" className="link-arrow">
              See the software stack
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
