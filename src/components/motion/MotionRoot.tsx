'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Arms scroll reveals for the current route.
 *
 * Elements opt in with `data-reveal` (fade + rise) or `data-curtain` (display
 * type rising out of a clipped line box). Nothing is hidden unless the inline
 * script in the root layout has set `html.js`, so a no-JS render shows every
 * piece of content at its final state.
 *
 * Uses one rAF-throttled, passive scroll pass rather than an
 * IntersectionObserver: an observer never fires for an element that jumps from
 * below the viewport to above it in a single frame (anchor links, restored
 * scroll positions), and that element would stay invisible for good. The pass
 * removes its own listeners as soon as every node has been revealed.
 */
export default function MotionRoot() {
  const pathname = usePathname()

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not([data-revealed]), [data-curtain]:not([data-revealed]), [data-arrive]:not([data-revealed])',
      ),
    )

    if (nodes.length === 0) return

    const reveal = (node: HTMLElement) => {
      node.dataset.revealed = 'true'
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(reveal)
      return
    }

    let pending = nodes
    let frame = 0

    const sweep = () => {
      frame = 0
      const trigger = window.innerHeight * 0.92
      const hits: HTMLElement[] = []
      const remaining: HTMLElement[] = []

      // Read everything first, then write, so the reveal does not invalidate
      // layout in the middle of the measurement loop.
      for (const node of pending) {
        if (node.getBoundingClientRect().top < trigger) hits.push(node)
        else remaining.push(node)
      }

      hits.forEach(reveal)
      pending = remaining

      if (remaining.length === 0) {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(sweep)
    }

    sweep()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return null
}
