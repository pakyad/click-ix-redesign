'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { ComponentType } from 'react'
import styles from './SystemLoop.module.css'

interface Surface {
  readonly key: string
  readonly label: string
  readonly product: string
  readonly line: string
  readonly glyph: readonly number[]
}

/**
 * Five surfaces, one stack. The section is a plate, not a carousel: every
 * screen is visible at once, and the index only spotlights one. Nothing
 * auto-plays, so there is no pause control to explain away.
 */
const SURFACES: readonly Surface[] = [
  {
    key: 'menu',
    label: 'Menu board',
    product: 'CS Sign Hub',
    line: 'Prices, day-parts, sold-out states.',
    glyph: [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  },
  {
    key: 'directory',
    label: 'Directory',
    product: 'CS Sign Hub',
    line: 'Floors and clinics, by level.',
    glyph: [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  },
  {
    key: 'campaign',
    label: 'Campaign',
    product: 'CS Play',
    line: 'Creative slots, day-parted.',
    glyph: [1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  },
  {
    key: 'estate',
    label: 'Estate',
    product: 'CS Play SSN',
    line: 'Every site, one status view.',
    glyph: [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  },
  {
    key: 'proof',
    label: 'Proof',
    product: 'Measurement',
    line: 'Playback logs and audience, together.',
    glyph: [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
]

function MenuScreen() {
  return (
    <div className={`${styles.ui} ${styles.spec} ${styles.specDark}`}>
      <span className={styles.specHead}>
        <b>Today</b>
        <i>06:00–22:00</i>
      </span>
      <ul className={styles.specRows}>
        <li>
          <span>Nasi lemak</span>
          <b>9.90</b>
        </li>
        <li>
          <span>Teh tarik</span>
          <b>3.50</b>
        </li>
        <li data-off="true">
          <span>Roti bakar</span>
          <em>Sold out</em>
        </li>
      </ul>
    </div>
  )
}

function DirectoryScreen() {
  return (
    <div className={`${styles.ui} ${styles.spec}`}>
      <span className={styles.specHead}>
        <b>Directory</b>
        <i>Level 3</i>
      </span>
      <ul className={styles.specRows}>
        <li data-on="true">
          <span>Outpatient</span>
          <b>3</b>
        </li>
        <li>
          <span>Pharmacy</span>
          <b>3</b>
        </li>
        <li>
          <span>Radiology</span>
          <b>2</b>
        </li>
        <li>
          <span>Lobby</span>
          <b>1</b>
        </li>
      </ul>
    </div>
  )
}

function CampaignScreen() {
  return (
    <div className={`${styles.ui} ${styles.spec} ${styles.specPhoto}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/hero-poster.jpg" alt="" />
      <span className={styles.specTime}>
        <b>00:12</b> / 00:30
      </span>
    </div>
  )
}

function EstateScreen() {
  return (
    <div className={`${styles.ui} ${styles.spec}`}>
      <span className={styles.specHead}>
        <b>Estate</b>
        <i>3 sites</i>
      </span>
      <ul className={styles.specRows}>
        <li data-on="true">
          <span>Kuala Lumpur</span>
          <b>Online</b>
        </li>
        <li>
          <span>Petaling Jaya</span>
          <b>Online</b>
        </li>
        <li data-off="true">
          <span>Cheras</span>
          <b>Offline</b>
        </li>
      </ul>
    </div>
  )
}

function ProofScreen() {
  return (
    <div className={`${styles.ui} ${styles.spec}`}>
      <span className={styles.specHead}>
        <b>Plays by hour</b>
        <i>Today</i>
      </span>
      <span className={styles.specBars} aria-hidden="true">
        {[34, 52, 44, 68, 58, 78].map((height, i) => (
          <i key={i} style={{ height: `${height}%` }} data-on={i >= 3 ? 'true' : 'false'} />
        ))}
      </span>
      <span className={styles.specFoot}>Spot log · 06:00–24:00</span>
    </div>
  )
}

const SCREENS: Record<string, ComponentType> = {
  menu: MenuScreen,
  directory: DirectoryScreen,
  campaign: CampaignScreen,
  estate: EstateScreen,
  proof: ProofScreen,
}

export default function SystemLoop() {
  const rootRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const wallRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const screenRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [active, setActive] = useState<string | null>(null)
  const [trace, setTrace] = useState<string | null>(null)

  // Entrance only. Nothing is bound to scroll position, nothing is pinned.
  useEffect(() => {
    const node = rootRef.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      node.dataset.ready = 'true'
      return
    }

    let cancelled = false
    let started = false
    let ctx: { revert: () => void } | null = null

    const run = async () => {
      const { default: gsap } = await import('gsap')
      if (cancelled) return
      node.dataset.ready = 'true'
      ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .fromTo(
            '[data-system-head]',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
            0,
          )
          .fromTo(
            '[data-screen]',
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', duration: 0.9, stagger: 0.08 },
            0.12,
          )
          .fromTo(
            '[data-index]',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.42,
          )
      }, node)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        run().catch(() => {
          node.dataset.ready = 'true'
        })
        observer.disconnect()
      },
      { threshold: 0.2 },
    )
    observer.observe(node)

    return () => {
      cancelled = true
      observer.disconnect()
      ctx?.revert()
    }
  }, [])

  // The trace only exists while a surface is being inspected. It runs from the
  // row, through the gutter, to the screen: an orthogonal circuit, not a curve.
  useEffect(() => {
    if (!active) {
      setTrace(null)
      return
    }

    const measure = () => {
      const stage = gridRef.current
      const wall = wallRef.current
      const row = rowRefs.current[active]
      const screen = screenRefs.current[active]
      if (!stage || !wall || !row || !screen) return

      const stageRect = stage.getBoundingClientRect()
      const wallRect = wall.getBoundingClientRect()
      const rowRect = row.getBoundingClientRect()
      const screenRect = screen.getBoundingClientRect()
      const x1 = rowRect.right - stageRect.left
      const y1 = rowRect.top + rowRect.height / 2 - stageRect.top
      const busX = wallRect.left - stageRect.left - 18
      const busY = wallRect.top - stageRect.top + 12
      const targetX = screenRect.left + screenRect.width / 2 - stageRect.left
      const targetY = screenRect.top - stageRect.top

      setTrace(`M ${x1} ${y1} H ${busX} V ${busY} H ${targetX} V ${targetY}`)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <section ref={rootRef} className={styles.band} aria-labelledby="system-title">
      <div ref={gridRef} className={`wrap ${styles.grid}`}>
        <div className={styles.head} data-system-head>
          <div className={styles.headMain}>
            <h2 id="system-title" className={styles.title}>
              Five screens, <span className={styles.quiet}>one stack.</span>
            </h2>
          </div>
          <p className={styles.lede}>
            Five jobs, five owners, one stack underneath.
          </p>
        </div>

        <div className={styles.wallWrap}>
          <div ref={wallRef} className={styles.wall} data-active={active ?? undefined} data-arrive>
            {SURFACES.map((surface, index) => {
              const Screen = SCREENS[surface.key]
              return (
                <div
                  key={surface.key}
                  className={styles.wallItem}
                  data-kind={surface.key}
                  data-active={active === surface.key ? 'true' : 'false'}
                  style={{ '--i': index } as React.CSSProperties}
                >
                  <div
                    ref={(node) => {
                      screenRefs.current[surface.key] = node
                    }}
                    className={styles.screen}
                    data-screen
                  >
                    <span className={styles.screenInner} aria-hidden="true">
                      <Screen />
                      <span className={styles.scan} />
                    </span>
                  </div>
                  <p className={styles.caption}>
                    {surface.label} · {surface.product}
                  </p>
                </div>
              )
            })}
          </div>

          <p className={styles.foot}>One team builds and runs all five.</p>
          <p className={styles.note}>Illustrative layouts, not product screenshots.</p>
        </div>

        <div className={styles.indexWrap}>
          <div
            className={styles.index}
            data-index
            onMouseLeave={() => setActive(null)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setActive(null)
              }
            }}
          >
            {SURFACES.map((surface) => (
              <button
                key={surface.key}
                ref={(node) => {
                  rowRefs.current[surface.key] = node
                }}
                type="button"
                className={styles.row}
                data-active={active === surface.key ? 'true' : 'false'}
                aria-pressed={active === surface.key}
                onMouseEnter={() => setActive(surface.key)}
                onFocus={() => setActive(surface.key)}
                onClick={() =>
                  setActive((previous) => (previous === surface.key ? null : surface.key))
                }
              >
                <span className={styles.rowBody}>
                  <span className={styles.rowLabel}>{surface.label}</span>
                  <span className={styles.rowLine}>{surface.line}</span>
                  <span className={styles.rowProduct}>{surface.product}</span>
                </span>
              </button>
            ))}
          </div>

          <Link href="/software/" className={styles.stackLink}>
            See the software stack <span aria-hidden="true">→</span>
          </Link>
        </div>

        {trace ? (
          <svg className={styles.trace} aria-hidden="true">
            <path key={trace} d={trace} pathLength={1} className={styles.tracePath} />
          </svg>
        ) : null}
      </div>
    </section>
  )
}
