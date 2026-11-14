'use client'

import { useEffect, useRef } from 'react'
import { caseCategories, caseStudies } from '@/lib/content'
import styles from './SeamField.module.css'

type Point = { x: number; y: number }
type Quad = readonly [Point, Point, Point, Point]
type Dot = { x: number; y: number; r: number }
type Meta = {
  plane: number
  base: Point
  edge: number
  depth: number
  samples: readonly number[]
}

const PAPER = '#f6f7f9'
const INK = 'rgba(11, 15, 20, 0.92)'
const HOLD_MS = 5200
const SAMPLE_W = 240
const SAMPLE_H = 160

const LANDSCAPE: Quad = [
  { x: 0.02, y: 0.17 },
  { x: 0.6, y: 0.09 },
  { x: 0.57, y: 0.63 },
  { x: 0, y: 0.72 },
]

const PORTRAIT: Quad = [
  { x: 0.64, y: 0.22 },
  { x: 0.94, y: 0.15 },
  { x: 0.92, y: 0.88 },
  { x: 0.62, y: 0.82 },
]

const PLANES = [
  { quad: LANDSCAPE, cols: 64, rows: 36, seed: 3 },
  { quad: PORTRAIT, cols: 22, rows: 40, seed: 11 },
] as const

const CASES = [
  { id: 'maxis', src: '/media/seam/maxis.jpg' },
  { id: 'cheras', src: '/media/seam/cheras.jpg' },
  { id: 'kpj2', src: '/media/seam/kpj2.jpg' },
  { id: 'cubig', src: '/media/seam/cubig.jpg' },
].map((item) => {
  const study = caseStudies.find((entry) => entry.id === item.id)
  const category = caseCategories.find((entry) => entry.id === study?.category)
  return {
    ...item,
    client: study?.client ?? '',
    sector: category?.label ?? '',
  }
})

const hash = (i: number, j: number) => {
  const n = Math.sin(i * 127.1 + j * 311.7) * 43758.5453
  return n - Math.floor(n)
}

const bilinear = (quad: Quad, u: number, v: number): Point => {
  const topX = quad[0].x + (quad[1].x - quad[0].x) * u
  const topY = quad[0].y + (quad[1].y - quad[0].y) * u
  const bottomX = quad[3].x + (quad[2].x - quad[3].x) * u
  const bottomY = quad[3].y + (quad[2].y - quad[3].y) * u
  return {
    x: topX + (bottomX - topX) * v,
    y: topY + (bottomY - topY) * v,
  }
}

const smoothstep = (a: number, b: number, value: number) => {
  const x = Math.min(1, Math.max(0, (value - a) / (b - a)))
  return x * x * (3 - 2 * x)
}

const loadImage = (src: string) =>
  new Promise<HTMLImageElement | null>((resolve) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = () => resolve(null)
    image.src = src
  })

const sampleImage = (image: HTMLImageElement | null) => {
  if (!image) return null
  const off = document.createElement('canvas')
  off.width = SAMPLE_W
  off.height = SAMPLE_H
  const ctx = off.getContext('2d', { willReadFrequently: true })
  if (!ctx) return null
  const scale = Math.max(SAMPLE_W / image.width, SAMPLE_H / image.height)
  const width = image.width * scale
  const height = image.height * scale
  ctx.drawImage(image, (SAMPLE_W - width) / 2, (SAMPLE_H - height) / 2, width, height)
  return ctx.getImageData(0, 0, SAMPLE_W, SAMPLE_H).data
}

const brightnessAt = (
  data: Uint8ClampedArray,
  u: number,
  v: number,
  crop: boolean,
) => {
  const cu = crop ? 0.36 + u * 0.42 : u
  const cv = crop ? 0.18 + v * 0.64 : v
  const x = Math.min(SAMPLE_W - 1, Math.max(0, Math.round(cu * (SAMPLE_W - 1))))
  const y = Math.min(SAMPLE_H - 1, Math.max(0, Math.round(cv * (SAMPLE_H - 1))))
  const i = (y * SAMPLE_W + x) * 4
  return (data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722) / 255
}

const buildDots = (samples: readonly (Uint8ClampedArray | null)[]): Meta[] => {
  const dots: Meta[] = []

  PLANES.forEach((plane, planeIndex) => {
    for (let i = 0; i < plane.cols; i += 1) {
      for (let j = 0; j < plane.rows; j += 1) {
        const u = (i + 0.5) / plane.cols
        const v = (j + 0.5) / plane.rows
        const radii = samples.map((data) => {
          if (!data) return 1.6
          const brightness = brightnessAt(data, u, v, planeIndex === 1)
          return 0.3 + (1 - brightness) * 3.6
        })

        dots.push({
          plane: planeIndex,
          base: bilinear(plane.quad, u, v),
          edge: Math.min(u, v, 1 - u, 1 - v),
          depth: 0.82 + 0.18 * (1 - v),
          samples: radii,
        })
      }
    }
  })

  return dots
}

export default function SeamField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const captionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let dpr = 1
    let dots: Meta[] | null = null
    let t = 0
    let running = false
    let visible = true
    let frame = 0
    let last = 0
    let pointer: { x: number; y: number } | null = null
    let pointerStart = 0
    let cancelled = false

    const draw = (time: number, activePointer: { x: number; y: number; strength: number } | null) => {
      if (!width || !height) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = PAPER
      ctx.fillRect(0, 0, width, height)

      const ink: Dot[] = []
      const background: Dot[] = []

      for (let y = 0.03; y < 0.99; y += 0.043) {
        for (let x = 0.02; x < 0.99; x += 0.038) {
          if (x < 0.62 && y > 0.06 && y < 0.76) continue
          if (x > 0.62 && y > 0.12 && y < 0.9) continue
          const n = hash(x * 100, y * 100)
          if (n < 0.24) continue
          background.push({ x: x * width, y: y * height, r: 0.7 + n * 0.5 })
        }
      }

      const cycle = Math.floor(time / HOLD_MS)
      const p = (time % HOLD_MS) / HOLD_MS
      const from = cycle % CASES.length
      const to = (cycle + 1) % CASES.length
      const morph = p < 0.3 ? 0 : p > 0.65 ? 1 : smoothstep(0.3, 0.65, p)
      const breathe = 1 + 0.015 * Math.sin(time / 900)

      if (dots) {
        for (const dot of dots) {
          let radius =
            dot.samples[from] + (dot.samples[to] - dot.samples[from]) * morph
          radius *= dot.depth * (0.64 + 0.36 * Math.min(1, dot.edge * 12)) * breathe

          if (activePointer) {
            const dx = dot.base.x - activePointer.x
            const dy = dot.base.y - activePointer.y
            radius += Math.exp(-(dx * dx + dy * dy) / 0.012) * activePointer.strength * 1.8
          }

          if (radius < 0.18) continue
          ink.push({ x: dot.base.x * width, y: dot.base.y * height, r: radius })
        }
      }

      ctx.fillStyle = 'rgba(11, 15, 20, 0.16)'
      ctx.beginPath()
      for (const dot of background) {
        ctx.moveTo(dot.x + dot.r, dot.y)
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
      }
      ctx.fill()

      ctx.fillStyle = INK
      ctx.beginPath()
      for (const dot of ink) {
        ctx.moveTo(dot.x + dot.r, dot.y)
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
      }
      ctx.fill()

      if (captionRef.current) {
        const active = CASES[p < 0.55 ? from : to]
        if (active) {
          const text = `${active.client} · ${active.sector}`
          if (captionRef.current.textContent !== text) captionRef.current.textContent = text
        }
      }
    }

    const render = (now: number) => {
      let strength = 0
      if (pointer) {
        strength = Math.max(0, 1 - (now - pointerStart) / 700)
        if (strength <= 0) pointer = null
      }
      draw(t, pointer ? { ...pointer, strength } : null)
    }

    const loop = (now: number) => {
      if (!running) return
      const delta = Math.min(40, now - last)
      last = now
      t += delta
      render(now)
      frame = window.requestAnimationFrame(loop)
    }

    const start = () => {
      if (running || reduced || !visible || !dots) return
      running = true
      last = performance.now()
      frame = window.requestAnimationFrame(loop)
    }

    const stop = () => {
      running = false
      window.cancelAnimationFrame(frame)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const nextWidth = Math.round(rect.width)
      const nextHeight = Math.round(rect.height)
      if (!nextWidth || !nextHeight) return
      width = nextWidth
      height = nextHeight
      dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      draw(t, null)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (reduced || event.pointerType === 'touch') return
      const rect = canvas.getBoundingClientRect()
      pointer = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      }
      pointerStart = performance.now()
      if (!running) start()
    }

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) start()
        else stop()
      },
      { threshold: 0.08 },
    )

    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(canvas)
    resize()

    const load = async () => {
      const images = await Promise.all(CASES.map((item) => loadImage(item.src)))
      if (cancelled) return
      dots = buildDots(images.map(sampleImage))
      resize()
      if (reduced) {
        draw(0, null)
      } else {
        observer.observe(canvas)
        canvas.addEventListener('pointermove', onPointerMove, { passive: true })
        document.addEventListener('visibilitychange', onVisibility)
        start()
      }
    }

    load()

    return () => {
      cancelled = true
      stop()
      observer.disconnect()
      sizeObserver.disconnect()
      canvas.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className={styles.field}>
      <span className={styles.fallback} aria-hidden="true" />
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <span className={styles.label} aria-hidden="true">
        Selected installations
      </span>
      <p ref={captionRef} className={styles.caption}>
        Maxis · Retail &amp; malls
      </p>
    </div>
  )
}
