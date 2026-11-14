'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeroStage from './HeroStage'
import PixelMarkStage from './PixelMarkStage'
import { slogans } from '@/lib/slogans'
import styles from './HeroCinematic.module.css'

const HOLD_MS = 5200

/**
 * The veil: a 12 x 8 grid of dark cells over the film. It is the screen in its
 * off state; CSS switches the cells off in a left-to-right scan, so the page
 * opens the way the product's own marks do.
 */
const VEIL = Array.from({ length: 96 }, (_, index) => {
  const col = index % 12
  const row = Math.floor(index / 12)
  return { key: index, delay: col * 14 + row * 6 }
})

/**
 * Homepage hero.
 *
 * One screen, one statement, one sign. The film is the installation; the shelf
 * on the left states the company's own lines; the dot-matrix sign below spells
 * the same line in pixels, filling cell by cell.
 *
 * The room follows the screen: a blurred bloom of the film sits behind it and
 * the card catches a soft light under the pointer. The band carries a grain so
 * the page reads as print.
 *
 * Motion is one load timeline — power3, no bounce. Reduced motion gets the
 * finished frame and the brand line; html.js gates every starting state so
 * no-JS renders composed.
 */
export default function HeroCinematic() {
  const rootRef = useRef<HTMLElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [reduced, setReduced] = useState(false)
  const [sloganIndex, setSloganIndex] = useState(0)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  // Reduced motion settles on the brand line rather than an arbitrary frame.
  useEffect(() => {
    if (reduced) setSloganIndex(1)
  }, [reduced])

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.15,
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || !inView || sloganIndex >= slogans.length - 1) return
    const timer = window.setInterval(() => {
      setSloganIndex((previous) => Math.min(previous + 1, slogans.length - 1))
    }, HOLD_MS)
    return () => window.clearInterval(timer)
  }, [reduced, inView, sloganIndex])

  const slogan = slogans[sloganIndex]

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    // The screen powers on: the veil is painted once, opaque, then CSS scans it
    // off and settles the film. Two frames, so the first paint is the dark screen.
    let second = 0
    const first = window.requestAnimationFrame(() => {
      second = window.requestAnimationFrame(() => {
        root.dataset.ready = 'true'
      })
    })

    return () => {
      window.cancelAnimationFrame(first)
      window.cancelAnimationFrame(second)
    }
  }, [])

  // A soft light follows the pointer across the film: the screen answers to
  // presence. Fine pointers only, never under reduced motion.
  useEffect(() => {
    const screen = screenRef.current
    if (!screen || reduced) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    let frame = 0
    const move = (event: PointerEvent) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const rect = screen.getBoundingClientRect()
        screen.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
        screen.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
      })
    }
    const enter = () => {
      screen.dataset.lit = 'true'
    }
    const leave = () => {
      screen.dataset.lit = 'false'
    }

    screen.addEventListener('pointermove', move, { passive: true })
    screen.addEventListener('pointerenter', enter)
    screen.addEventListener('pointerleave', leave)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      screen.removeEventListener('pointermove', move)
      screen.removeEventListener('pointerenter', enter)
      screen.removeEventListener('pointerleave', leave)
    }
  }, [reduced])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <section ref={rootRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.stage} data-hero-stage>
            <HeroStage index={sloganIndex} />
          </div>

          <div
            className={`${styles.markBlock} ${styles.fade}`}
            data-hero-fade
            style={{ '--i': 0 } as React.CSSProperties}
          >
            <PixelMarkStage index={sloganIndex} />
          </div>

          <p
            className={`${styles.lede} ${styles.fade}`}
            data-hero-fade
            style={{ '--i': 1 } as React.CSSProperties}
          >
            The software that runs, sells and proves digital screen networks — and the displays,
            players and installation that carry it. One team, Kuala Lumpur.
          </p>

          <div
            className={`${styles.actions} ${styles.fade}`}
            data-hero-fade
            style={{ '--i': 2 } as React.CSSProperties}
          >
            <Link href="/our-services/" className={styles.textLink}>
              Explore our services <span aria-hidden="true">→</span>
            </Link>
            <Link href="/case-studies/" className={styles.textLink}>
              See the work <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul
            className={`${styles.scope} ${styles.fade}`}
            data-hero-fade
            style={{ '--i': 3 } as React.CSSProperties}
            aria-label="What we cover"
          >
            <li>Screens</li>
            <li>Players</li>
            <li>Software</li>
            <li>Measurement</li>
          </ul>
        </div>

        <div className={styles.mediaWrap}>
          <div className={styles.bloom} aria-hidden="true" />

          <figure className={styles.media} data-hero-media>
            <div ref={screenRef} className={styles.screen}>
              <video
                ref={videoRef}
                className={styles.film}
                poster="/media/hero-poster.jpg"
                autoPlay={!reduced}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
              >
                <source src="/media/hero.mp4" type="video/mp4" />
              </video>

              <span className={styles.light} aria-hidden="true" />
              <span className={styles.scan} aria-hidden="true" />

              <span className={styles.veil} aria-hidden="true">
                {VEIL.map((cell) => (
                  <span
                    key={cell.key}
                    style={{ '--d': `${cell.delay}ms` } as React.CSSProperties}
                  />
                ))}
              </span>

              <div className={styles.chrome}>
                <figcaption className={styles.caption}>
                  Installation film · MotoGP KL26 launch
                </figcaption>

                <button
                  type="button"
                  className={styles.playToggle}
                  aria-pressed={!playing}
                  onClick={togglePlayback}
                  aria-label={playing ? 'Pause background film' : 'Play background film'}
                >
                  <span aria-hidden="true">{playing ? 'II' : '▶'}</span>
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
