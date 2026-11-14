/**
 * A 5×7 dot-matrix face.
 *
 * The hero's sign draws these cells directly, so the words are made of pixels
 * rather than set beside them. Only the characters the site's lines use.
 */
const GLYPHS: Record<string, readonly string[]> = {
  A: [' ### ', '#   #', '#   #', '#####', '#   #', '#   #', '#   #'],
  B: ['#### ', '#   #', '#   #', '#### ', '#   #', '#   #', '#### '],
  C: [' ### ', '#   #', '#    ', '#    ', '#    ', '#   #', ' ### '],
  D: ['#### ', '#   #', '#   #', '#   #', '#   #', '#   #', '#### '],
  E: ['#####', '#    ', '#    ', '#### ', '#    ', '#    ', '#####'],
  F: ['#####', '#    ', '#    ', '#### ', '#    ', '#    ', '#    '],
  G: [' ### ', '#   #', '#    ', '# ###', '#   #', '#   #', ' ####'],
  H: ['#   #', '#   #', '#   #', '#####', '#   #', '#   #', '#   #'],
  I: ['#####', '  #  ', '  #  ', '  #  ', '  #  ', '  #  ', '#####'],
  J: ['#### ', '   # ', '   # ', '   # ', '   # ', '#  # ', ' ##  '],
  K: ['#   #', '#  # ', '# #  ', '##   ', '# #  ', '#  # ', '#   #'],
  L: ['#    ', '#    ', '#    ', '#    ', '#    ', '#    ', '#####'],
  M: ['#   #', '## ##', '# # #', '#   #', '#   #', '#   #', '#   #'],
  N: ['#   #', '##  #', '# # #', '#  ##', '#   #', '#   #', '#   #'],
  O: [' ### ', '#   #', '#   #', '#   #', '#   #', '#   #', ' ### '],
  P: ['#### ', '#   #', '#   #', '#### ', '#    ', '#    ', '#    '],
  Q: [' ### ', '#   #', '#   #', '#   #', '# # #', '#  # ', ' ## #'],
  R: ['#### ', '#   #', '#   #', '#### ', '# #  ', '#  # ', '#   #'],
  S: [' ####', '#    ', '#    ', ' ### ', '    #', '    #', '#### '],
  T: ['#####', '  #  ', '  #  ', '  #  ', '  #  ', '  #  ', '  #  '],
  U: ['#   #', '#   #', '#   #', '#   #', '#   #', '#   #', ' ### '],
  V: ['#   #', '#   #', '#   #', '#   #', '#   #', ' # # ', '  #  '],
  W: ['#   #', '#   #', '#   #', '#   #', '# # #', '## ##', '#   #'],
  X: ['#   #', '#   #', ' # # ', '  #  ', ' # # ', '#   #', '#   #'],
  Y: ['#   #', '#   #', ' # # ', '  #  ', '  #  ', '  #  ', '  #  '],
  Z: ['#####', '    #', '   # ', '  #  ', ' #   ', '#    ', '#####'],
  '.': ['     ', '     ', '     ', '     ', '     ', ' ##  ', ' ##  '],
  ',': ['     ', '     ', '     ', '     ', ' ##  ', ' ##  ', ' #   '],
  '-': ['     ', '     ', '     ', '#####', '     ', '     ', '     '],
  "'": ['  #  ', '  #  ', ' #   ', '     ', '     ', '     ', '     '],
  '&': [' ##  ', '#  # ', '# #  ', ' #   ', '# # #', '#  # ', ' ## #'],
  '/': ['    #', '    #', '   # ', '  #  ', ' #   ', '#    ', '#    '],
  ' ': ['     ', '     ', '     ', '     ', '     ', '     ', '     '],
}

const GLYPH_WIDTH = 5
const GLYPH_HEIGHT = 7
const TRACKING = 1
const LINE_GAP = 2

export interface PixelCell {
  readonly x: number
  readonly y: number
}

export interface PixelLayout {
  readonly columns: number
  readonly rows: number
  readonly cells: readonly PixelCell[]
}

const widthOf = (text: string) => text.length * (GLYPH_WIDTH + TRACKING) - TRACKING

/**
 * Lays the lines out as a centred block. Two lines sit on a 16-row grid; a
 * single line is centred in the same height so the panel never changes size.
 */
export function layoutText(lines: readonly string[]): PixelLayout {
  const rows = 16
  const prepared = lines.map((line) => line.toUpperCase())
  const widest = Math.max(...prepared.map(widthOf))
  const blockHeight = prepared.length > 1 ? GLYPH_HEIGHT * 2 + LINE_GAP : GLYPH_HEIGHT
  const top = Math.floor((rows - blockHeight) / 2)
  const cells: PixelCell[] = []

  prepared.forEach((line, lineIndex) => {
    const offsetX = Math.floor((widest - widthOf(line)) / 2)
    const offsetY = lineIndex === 0 ? top : top + GLYPH_HEIGHT + LINE_GAP
    let x = offsetX

    for (const character of line) {
      const glyph = GLYPHS[character] ?? GLYPHS[' ']
      glyph.forEach((row, rowIndex) => {
        for (let column = 0; column < GLYPH_WIDTH; column += 1) {
          if (row[column] === '#') cells.push({ x: x + column, y: offsetY + rowIndex })
        }
      })
      x += GLYPH_WIDTH + TRACKING
    }
  })

  return { columns: widest, rows, cells }
}

/** Lays a single line out on the 7-row matrix, for the ticker. */
export function layoutLine(text: string): { width: number; cells: readonly PixelCell[] } {
  const prepared = text.toUpperCase()
  const cells: PixelCell[] = []
  let x = 0

  for (const character of prepared) {
    const glyph = GLYPHS[character] ?? GLYPHS[' ']
    glyph.forEach((row, rowIndex) => {
      for (let column = 0; column < GLYPH_WIDTH; column += 1) {
        if (row[column] === '#') cells.push({ x: x + column, y: rowIndex })
      }
    })
    x += GLYPH_WIDTH + TRACKING
  }

  return { width: Math.max(0, x - TRACKING), cells }
}

/** The widest line in the series, so every slide keeps the same cell size. */
export function panelColumns(lines: readonly (readonly string[])[]): number {
  return Math.max(...lines.map((entry) => Math.max(...entry.map(widthOf))))
}
