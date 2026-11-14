import type { Metadata } from 'next'
import Link from 'next/link'
import HeroCinematic from '@/components/home/HeroCinematic'
import ClientRow from '@/components/home/ClientRow'
import SystemLoop from '@/components/home/SystemLoop'
import SoftwareBand from '@/components/home/SoftwareBand'
import WorkRail, { type RailItem } from '@/components/home/WorkRail'
import { caseCategories, caseStudies } from '@/lib/content'
import styles from './page.module.css'
import { mailto } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Click iX — Smarter Screen. Smarter Business.',
  description:
    'Click iX designs, builds and runs digital screen networks: LED and displays, players, CS Play and CS Sign Hub, installation and measurement — one team, end to end.',
  alternates: { canonical: '/' },
}

const workShots: Record<string, { src: string; alt: string }> = {
  maxis: {
    src: '/media/maxis-screen.jpg',
    alt: 'Hanging landscape screen above a Maxis store display.',
  },
  cheras: {
    src: '/media/cheras-mall.jpg',
    alt: 'Mall stage screen during an event at Cheras LeisureMall.',
  },
  cubig: {
    src: '/media/outdoor-street.jpg',
    alt: 'Street-level digital screen at a pedestrian crossing in Kuala Lumpur.',
  },
  kpj2: {
    src: '/media/kpj2-lobby.jpg',
    alt: 'Hospital lobby with a wall-mounted directory and video wall.',
  },
}

export default function Home() {
  const railItems: RailItem[] = [...caseStudies]
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
    .map((study) => {
      const category = caseCategories.find((item) => item.id === study.category)

      return {
        id: study.id,
        client: study.client,
        title: study.title,
        sector: category?.label ?? 'Deployment',
        where: study.where,
        href: category?.route ?? '/case-studies/',
        image: workShots[study.id] ?? study.image,
      }
    })

  return (
    <main id="main-content" className={styles.page}>
      <HeroCinematic />

      <ClientRow />

      <SystemLoop />

      <SoftwareBand />

      {/* ---------------------------------------------------------- cta */}

      {/* --------------------------------------------------------- work */}
      <section className={`${styles.section} ${styles.white}`} aria-labelledby="work-title">
        <div className="wrap">
          <div className={styles.head} data-reveal>
            <div>
              <h2 id="work-title" className={`h2 ${styles.headTitle}`}>
                Real screens.
                <br />
                Real installations.
              </h2>
            </div>
            <div className={styles.headAside}>
              <p>
                Store networks, mall screens, street-level LED and hospital wayfinding. Each one is
                documented — what was installed, which systems run it, and where it is.
              </p>
              <Link href="/case-studies/" className="link-arrow">
                All case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <WorkRail items={railItems} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark} ${styles.ctaSection}`} aria-labelledby="cta-title">
        <div className={`wrap ${styles.cta}`} data-reveal>
          <div>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Start with your
              <br />
              screen list.
            </h2>
            <p className={styles.ctaLede}>
              Send what you have — locations, screen types, players, controllers. The first useful
              answer is a compatibility review, not a sales deck.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href={mailto('Quote')} className="btn">
              Get a quote <span aria-hidden="true">→</span>
            </Link>
            <Link href="/our-process/" className={`btn ${styles.btnGhost}`}>
              See the process
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
