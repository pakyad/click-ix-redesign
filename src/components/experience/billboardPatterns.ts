/**
 * Original procedural LED compositions for the miniature billboard.
 *
 * These are abstract diagrams of a screen network — a signal ramp, connected
 * screens and a content stack. They are not advertising creative, not a client
 * campaign, and not a screenshot of anything. No randomness: every cell is a
 * deterministic function of its row, column and scene.
 */

export const BILLBOARD_SCENES = ['Signal', 'Network', 'Content'] as const
export type BillboardScene = (typeof BILLBOARD_SCENES)[number]

export const SCENE_LABEL: Record<BillboardScene, string> = {
  Signal: 'Signal ramp across the display',
  Network: 'Three connected screens',
  Content: 'Content stack being composed',
}

export type PixelTone = 'dark' | 'blue' | 'cyan' | 'teal' | 'light'

export const DESKTOP_COLUMNS = 26
export const DESKTOP_ROWS = 13
export const COMPACT_COLUMNS = 18
export const COMPACT_ROWS = 9

/** Stepped skyline: bars of rising height, toned from teal to cyan. */
function signalTone(row: number, column: number, columns: number, rows: number): PixelTone {
  const progress = column / (columns - 1)
  const height = Math.round(progress * (rows - 2)) + 1
  const fromBottom = rows - 1 - row
  if (fromBottom >= height) return 'dark'
  if (fromBottom === height - 1) return 'cyan'
  if (fromBottom >= height - 3) return progress > 0.55 ? 'cyan' : 'blue'
  return progress > 0.72 ? 'blue' : 'teal'
}

/** Three filled screen panels joined by one trunk below. */
function networkTone(row: number, column: number, columns: number, rows: number): PixelTone {
  const third = columns / 3
  const index = Math.min(2, Math.floor(column / third))
  const left = Math.round(index * third) + 1
  const right = Math.round((index + 1) * third) - 2
  const top = 2
  const bottom = rows - 5

  if (column >= left && column <= right && row >= top && row <= bottom) {
    const palette: PixelTone[] = ['blue', 'teal', 'blue']
    if (row === top) return 'cyan'
    if (row === bottom) return 'dark'
    if (row === top + 2) return 'dark'
    return palette[index]
  }

  // One trunk line across the full width connects the three panels.
  if (row === bottom + 2 && column >= 1 && column <= columns - 2) return 'cyan'

  return 'dark'
}

/** Four content bars of decreasing length with one filled block. */
function contentTone(row: number, column: number, columns: number, rows: number): PixelTone {
  const bars = [
    { r: 2, from: 2, to: columns - 4, tone: 'cyan' as PixelTone },
    { r: 4, from: 2, to: columns - 8, tone: 'blue' as PixelTone },
    { r: 6, from: 2, to: columns - 6, tone: 'teal' as PixelTone },
  ]

  for (const bar of bars) {
    if (row === bar.r && column >= bar.from && column <= bar.to) return bar.tone
  }

  if (row >= rows - 4 && row <= rows - 2 && column >= 2 && column <= 6) return 'light'
  if (row >= rows - 4 && row <= rows - 2 && column >= columns - 9 && column <= columns - 5) return 'cyan'

  return 'dark'
}

export function pixelTone(
  row: number,
  column: number,
  scene: number,
  columns = DESKTOP_COLUMNS,
  rows = DESKTOP_ROWS,
): PixelTone {
  if (scene === 1) return networkTone(row, column, columns, rows)
  if (scene === 2) return contentTone(row, column, columns, rows)
  return signalTone(row, column, columns, rows)
}

/** Column-led stagger so a scene resolves as a sweep, not a flash. */
export function pixelDelay(column: number, row: number): string {
  return `${Math.min(520, column * 17 + (row % 3) * 9)}ms`
}
