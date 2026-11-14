'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './RouteWipe.module.css'

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * The channel change.
 *
 * Route-to-route, the page used to swap in one frame. Now a paper plate with one
 * LED seam covers the cut, then lifts: the new page is revealed already
 * arriving, the way a screen comes back on. It never blocks input, never traps
 * focus and disappears entirely under reduced motion.
 */
export default function RouteWipe() {
  const pathname = usePathname()
  const first = useRef(true)
  const [enabled, setEnabled] = useState(false)
  const [phase, setPhase] = useState<'idle' | 'cover' | 'reveal'>('idle')

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setEnabled(!query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (!enabled) return

    setPhase('cover')

    let second = 0
    const firstFrame = window.requestAnimationFrame(() => {
      second = window.requestAnimationFrame(() => setPhase('reveal'))
    })
    const settle = window.setTimeout(() => setPhase('idle'), 720)

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(second)
      window.clearTimeout(settle)
    }
  }, [pathname, enabled])

  return (
    <div className={styles.wipe} data-phase={phase} aria-hidden="true">
      <span className={styles.seam} />
    </div>
  )
}
