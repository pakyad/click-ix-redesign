import { pixelMarks } from '@/lib/pixelMarks'
import styles from './PixelMarkStage.module.css'

/**
 * A small pixel stage.
 *
 * The badge is drawn from its own geometry: the plate rect and every glyph dot,
 * read from the official chip. The dots switch on in sequence, then the crisp
 * chip takes over — same rects, same colours, so nothing shifts when it does.
 * The name sits beside it in the site's own type.
 */
export default function PixelMarkStage({ index }: { readonly index: number }) {
  const mark = pixelMarks[index % pixelMarks.length]
  const { plate } = mark

  return (
    <div className={styles.mark} key={mark.id}>
      <div className={styles.stage} aria-hidden="true">
        <svg className={styles.grid} viewBox={`0 0 ${plate.w} ${plate.h}`} shapeRendering="crispEdges" role="presentation" focusable="false">
          <rect
            x={plate.x}
            y={plate.y}
            width={plate.w}
            height={plate.h}
            rx={plate.rx}
            fill={plate.fill}
            stroke={plate.stroke ?? 'none'}
          />

          {mark.dots.map((dot, key) => (
            <rect
              key={key}
              className={styles.cell}
              x={dot.x}
              y={dot.y}
              width={dot.w}
              height={dot.h}
              fill={mark.ink}
              style={{ animationDelay: `${Math.round((dot.x + dot.y) * 6)}ms` }}
            />
          ))}
        </svg>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.snap} src={mark.src} alt="" decoding="async" />
      </div>

      <span className={styles.name}>{mark.name}</span>
    </div>
  )
}
