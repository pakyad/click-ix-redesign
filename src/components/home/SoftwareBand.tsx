import Link from 'next/link'
import { heroPosters } from '@/lib/heroPosters'
import styles from './SoftwareBand.module.css'

const CORE = new Set(['cs-deals', 'cs-play', 'cs-play-ssn', 'cs-sign-hub'])

/**
 * The software band.
 *
 * Four core platforms, then the four supporting layers, on hairlines rather
 * than cards: this is a stack spec, not a product catalogue. Every claim is the
 * product's own role from `content.ts`; nothing is measured or invented.
 */
export default function SoftwareBand() {
  const core = heroPosters.filter((poster) => CORE.has(poster.id))
  const supporting = heroPosters.filter((poster) => !CORE.has(poster.id))

  return (
    <section className={styles.band} aria-labelledby="software-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="software-title" className={styles.title}>
            The software behind
            <br />
            <span className={styles.quiet}>every screen.</span>
          </h2>

          <div className={styles.aside}>
            <p>
              Four platforms do the daily work — inventory and billing, playback on large-format
              screens, indoor networks, and in-house signage. All built and maintained in-house.
            </p>
            <Link href="/software/" className={styles.link}>
              All eight parts <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <ul className={styles.core} data-arrive>
          {core.map((poster, index) => (
            <li key={poster.id} className={styles.item} style={{ '--i': index } as React.CSSProperties}>
              <div className={styles.identity}>
                {poster.mark ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={styles.mark}
                      src={poster.mark.src}
                      alt={poster.markSuffix ? '' : poster.name}
                      width={poster.mark.width}
                      height={poster.mark.height}
                      loading="lazy"
                      decoding="async"
                    />
                    {poster.markSuffix ? <span className={styles.suffix}>{poster.markSuffix}</span> : null}
                  </>
                ) : (
                  <span className={styles.wordmark}>{poster.name}</span>
                )}
              </div>

              <p className={styles.role}>{poster.role}</p>
              <p className={styles.line}>{poster.line}</p>
            </li>
          ))}
        </ul>

        <div className={styles.supportWrap}>
          <p className={styles.supportLabel}>Supporting layers</p>
          <ul className={styles.support}>
            {supporting.map((poster) => (
              <li key={poster.id}>
                <span className={styles.supportName}>{poster.name}</span>
                <span className={styles.supportRole}>{poster.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
