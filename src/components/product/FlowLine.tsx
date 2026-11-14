'use client'

import { useLayoutEffect, useRef } from 'react'
import styles from './FlowLine.module.css'

export interface FlowStep {
  readonly step: string
  readonly system: string
  readonly detail: string
}

/**
 * The commercial flow, drawn as the page scrolls through it.
 *
 * One booking: sell, schedule, play, prove, bill. The rule fills left to right
 * with the section's own scroll progress and each step takes its turn — no
 * pinning, no scroll hijack. With scripting off, or motion reduced, the line is
 * simply complete and every step is on.
 */
export default function FlowLine({ steps }: { readonly steps: readonly FlowStep[] }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      root.dataset.live = 'complete'
      return
    }

    let cancelled = false
    let ctx: { revert: () => void } | null = null

    const run = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const progress = { value: 0 }
        root.dataset.live = 'true'
        root.style.setProperty('--flow', '0')

        gsap.to(progress, {
          value: 1,
          ease: 'none',
          onUpdate: () => {
            root.style.setProperty('--flow', progress.value.toFixed(3))
            const nodes = root.querySelectorAll<HTMLElement>('[data-node]')
            const total = nodes.length
            nodes.forEach((node, index) => {
              const threshold = (index + 0.35) / total
              node.dataset.on = progress.value >= threshold ? 'true' : 'false'
            })
          },
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            end: 'bottom 62%',
            scrub: 0.4,
          },
        })

        // Settle the starting state on load, so a deep link does not sit at
        // "complete" until the first scroll event.
        ScrollTrigger.refresh()
      }, root)
    }

    run().catch(() => {
      root.dataset.live = 'complete'
    })

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <div ref={rootRef} className={styles.flow} data-live="false">
      <div className={styles.track} aria-hidden="true">
        <span className={styles.base} />
        <span className={styles.fill} />
      </div>

      <ol className={styles.steps}>
        {steps.map((item) => (
          <li key={item.step} className={styles.step} data-node data-on="false">
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.name}>{item.step}</span>
            <span className={styles.system}>{item.system}</span>
            <p className={styles.detail}>{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
