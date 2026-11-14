/**
 * Official CityScreen marks, supplied by the company and used unchanged.
 *
 * The pack ships one lockup per service on a shared dot grid (cap height 138),
 * in a light and a dark cut, plus a 56×56 app-icon plate. Marks are never
 * recoloured or re-proportioned; only the height is set.
 *
 * Products with no supplied mark are set in type — inventing one would be a new
 * brand asset.
 */
interface MarkAsset {
  readonly base: string
  readonly width: number
  readonly height: number
}

const marks: Record<string, MarkAsset> = {
  'cs-deals': { base: 'cs-deals', width: 930, height: 188 },
  'cs-play': { base: 'cs-play', width: 790, height: 188 },
  'cs-play-ssn': { base: 'cs-play', width: 790, height: 188 },
  'cs-sign-hub': { base: 'cs-signhub', width: 1269, height: 188 },
  ssp: { base: 'cs-context', width: 1183, height: 188 },
  measurement: { base: 'cs-edgeinsights', width: 1666, height: 188 },
}

const CHIP = 56

export default function ProductMark({
  productId,
  label,
  height = 24,
  tone = 'light',
  variant = 'lockup',
  className,
}: {
  readonly productId: string
  readonly label: string
  readonly height?: number
  readonly tone?: 'light' | 'dark'
  readonly variant?: 'lockup' | 'chip'
  readonly className?: string
}) {
  const mark = marks[productId]
  if (!mark) return null

  const src =
    variant === 'chip'
      ? `/brand/cityscreen/${mark.base}-chip.svg`
      : `/brand/cityscreen/${mark.base}-${tone}.svg`

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${label} logo`}
      width={variant === 'chip' ? CHIP : mark.width}
      height={variant === 'chip' ? CHIP : mark.height}
      style={{ height, width: 'auto' }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}

export function hasMark(productId: string): boolean {
  return Boolean(marks[productId])
}
