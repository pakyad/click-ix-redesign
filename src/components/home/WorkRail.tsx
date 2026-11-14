'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import styles from './WorkRail.module.css'

export interface RailItem {
  readonly id: string
  readonly client: string
  readonly title: string
  readonly sector: string
  readonly where: string
  readonly href: string
  readonly image?: { readonly src: string; readonly alt: string }
}

/**
 * The deployment rail.
 *
 * Thirteen documented deployments instead of four cards: a snap rail that keeps
 * every project one gesture away, with the text carrying the record when there
 * is no photograph to show. Native scrolling, no pinning, no autoplay.
 */
export default function WorkRail({ items }: { readonly items: readonly RailItem[] }) {
  const railRef = useRef<HTMLUListElement>(null)

  const nudge = (direction: 1 | -1) => {
    const rail = railRef.current
    if (!rail) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.82,
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <p className={styles.count}>
          {items.length} documented deployments
        </p>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={() => nudge(-1)}
            aria-label="Previous deployments"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className={styles.control}
            onClick={() => nudge(1)}
            aria-label="Next deployments"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <ul className={styles.rail} ref={railRef} data-arrive>
        {items.map((item, index) => (
          <li key={item.id} className={styles.card} style={{ '--i': index } as React.CSSProperties}>
            <Link href={item.href} className={styles.link}>
              <span className={styles.frame}>
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 700px) 78vw, 300px"
                    className={styles.image}
                  />
                ) : (
                  <span className={styles.plate} aria-hidden="true">
                    <span className={styles.plateSector}>{item.sector}</span>
                    <span className={styles.plateName}>{item.client}</span>
                  </span>
                )}
              </span>

              <span className={styles.meta}>
                <span className={styles.client}>{item.client}</span>
                {item.image ? <span className={styles.sector}>{item.sector}</span> : null}
                <span className={styles.line}>{item.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
