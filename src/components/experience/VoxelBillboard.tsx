'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  BILLBOARD_SCENES,
  COMPACT_COLUMNS,
  COMPACT_ROWS,
  DESKTOP_COLUMNS,
  DESKTOP_ROWS,
  SCENE_LABEL,
  pixelDelay,
  pixelTone,
} from './billboardPatterns'
import styles from './VoxelBillboard.module.css'

/** One full cycle through the three compositions. */
const LOOP_MS = 7800
const SCENE_MS = Math.round(LOOP_MS / BILLBOARD_SCENES.length)

function useCompactGrid() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(max-width: 640px)')
    const sync = () => setCompact(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  return compact
}

export default function VoxelBillboard() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [scene, setScene] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [inView, setInView] = useState(true)
  const [pageVisible, setPageVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  // Bumped on a manual change so the loop restarts its hold instead of
  // stacking a second transition on top of the one the user just asked for.
  const [holdReset, setHoldReset] = useState(0)

  const compact = useCompactGrid()
  const columns = compact ? COMPACT_COLUMNS : DESKTOP_COLUMNS
  const rows = compact ? COMPACT_ROWS : DESKTOP_ROWS

  const cells = useMemo(
    () =>
      Array.from({ length: columns * rows }, (_, index) => ({
        id: index,
        row: Math.floor(index / columns),
        column: index % columns,
      })),
    [columns, rows],
  )

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReducedMotion(motion.matches)
    const syncVisibility = () => setPageVisible(!document.hidden)

    syncMotion()
    syncVisibility()

    motion.addEventListener('change', syncMotion)
    document.addEventListener('visibilitychange', syncVisibility)

    return () => {
      motion.removeEventListener('change', syncMotion)
      document.removeEventListener('visibilitychange', syncVisibility)
    }
  }, [])

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
    if (userPaused || reducedMotion || !inView || !pageVisible) return

    const timer = window.setInterval(() => {
      setScene((previous) => (previous + 1) % BILLBOARD_SCENES.length)
    }, SCENE_MS)

    return () => window.clearInterval(timer)
  }, [userPaused, reducedMotion, inView, pageVisible, holdReset])

  const advance = useCallback(() => {
    setScene((previous) => {
      const next = (previous + 1) % BILLBOARD_SCENES.length
      setAnnouncement(`Sample display: ${SCENE_LABEL[BILLBOARD_SCENES[next]]}`)
      return next
    })
    setHoldReset((previous) => previous + 1)
  }, [])

  return (
    <div ref={rootRef} className={styles.rig}>
      <div
        className={styles.model}
        role="img"
        aria-label="Code-drawn miniature LED billboard with a physical frame, two supports and a stepped base, cycling three abstract display compositions"
      >
        <div aria-hidden="true" className={styles.shadow} />
        <div aria-hidden="true" className={styles.topFace} />
        <div aria-hidden="true" className={styles.sideFace} />

        <div className={styles.screen} aria-hidden="true">
          <div className={styles.matrix} data-scene={BILLBOARD_SCENES[scene]}>
            {cells.map(({ id, row, column }) => (
              <span
                key={id}
                className={styles.pixel}
                data-tone={pixelTone(row, column, scene, columns, rows)}
                style={{ transitionDelay: pixelDelay(column, row) }}
              />
            ))}
          </div>
        </div>

        <div aria-hidden="true" className={styles.legLeft} />
        <div aria-hidden="true" className={styles.legRight} />
        <div aria-hidden="true" className={styles.plinth}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.control} onClick={advance}>
          Change display
        </button>
        <button
          type="button"
          className={styles.control}
          aria-pressed={userPaused}
          disabled={reducedMotion}
          onClick={() => setUserPaused((previous) => !previous)}
        >
          {reducedMotion ? 'Reduced motion' : userPaused ? 'Resume loop' : 'Pause loop'}
        </button>
      </div>

      <p className={styles.caption}>
        Illustrative display study drawn in code. Not a photograph, a client installation or a live
        network.
      </p>

      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </div>
  )
}
