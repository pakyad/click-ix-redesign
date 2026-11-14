import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './not-found.module.css'
import { mailto } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Page not found | Click iX',
  description: 'That address is not on the Click iX network. Every canonical page is one click away.',
  robots: { index: false, follow: true },
}

const destinations = [
  { href: '/software/', label: 'Products', note: 'The eight offerings in the stack' },
  { href: '/our-services/', label: 'Services', note: 'Strategy, hardware, content, installation' },
  { href: '/case-studies/', label: 'Work', note: 'Ten documented deployments' },
  { href: '/our-process/', label: 'Process', note: 'Audit, prove one site, roll out' },
]

export default function NotFound() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.inner}>
        <div className="wrap">
          <p className={styles.code}>404</p>

          <h1 className={styles.title}>
            That page isn&rsquo;t <span className={styles.quiet}>on the network.</span>
          </h1>

          <p className={styles.lede}>
            The address may be old, or a link may have been shortened. Nothing is broken on our side —
            every page of this site is still one click from here.
          </p>

          <ul className={styles.links}>
            {destinations.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  <span className={styles.linkLabel}>{item.label}</span>
                  <span className={styles.linkNote}>{item.note}</span>
                  <span className={styles.linkArrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link href="/" className="btn">
              Back to the homepage <span aria-hidden="true">→</span>
            </Link>
            <Link href={mailto('Enquiry')} className={styles.textLink}>
              Tell us what you were looking for <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
