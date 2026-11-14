'use client'

import Link from 'next/link'
import styles from './Footer.module.css'
import { mailto } from '@/lib/contact'

const explore = [
  { href: '/our-services/', label: 'Services' },
  { href: '/software/', label: 'Products' },
  { href: '/case-studies/', label: 'Case studies' },
  { href: '/our-process/', label: 'Process' },
  { href: '/about/', label: 'About' },
]

const services = [
  { href: '/marketing-communication-strategy/', label: 'Communication strategy' },
  { href: '/project-management/', label: 'Project management' },
  { href: '/consumer-journey-mapping/', label: 'Journey mapping' },
  { href: '/digital-signage-solutions-mapping/', label: 'Solution mapping' },
  { href: '/content-mapping/', label: 'Content mapping' },
  { href: '/data-analytics/', label: 'Data and analytics' },
  { href: '/interactive-solution/', label: 'Interactive solution' },
]

/**
 * The close of the site: one white surface, the brand line and the sitemap.
 * No film, no scrim — the page ends on the same paper it was built on.
 */
export default function Footer() {
  const backToTop = () => {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.top}>
          <p className={styles.line}>
            Smarter Screen.
            <br />
            <span>Smarter Business.</span>
          </p>

          <nav className={styles.cols} aria-label="Footer">
            <div className={styles.col}>
              <p className={styles.colTitle}>Explore</p>
              <ul>
                {explore.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Services</p>
              <ul>
                {services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Kuala Lumpur</p>
              <ul>
                <li>Malaysia</li>
                <li>
                  <Link href={mailto('Project')}>Start a project →</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.base}>
          <p>
            {'\u00A9'} {new Date().getFullYear()} CLICK IX Sdn Bhd
          </p>
          <button type="button" className={styles.toTop} onClick={backToTop}>
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
