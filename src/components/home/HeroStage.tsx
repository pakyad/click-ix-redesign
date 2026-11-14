import { slogans } from '@/lib/slogans'
import styles from './HeroStage.module.css'

/**
 * The statement shelf.
 *
 * The visible lines are a display device; the page heading is the stable brand
 * line, so the document has one heading that does not change under a reader or
 * a crawler. The rotating lines are hidden from assistive technology.
 */
export default function HeroStage({ index }: { readonly index: number }) {
  return (
    <>
      <h1 id="hero-title" className="sr-only">
        Click iX — Smarter Screen. Smarter Business.
      </h1>
      <div className={styles.title} aria-hidden="true">
        {slogans.map((item, slide) => (
          <span
            key={item.id}
            className={styles.slide}
            data-active={slide === index}
          >
            {item.lines.map((line, lineIndex) => (
              <span key={line} className={styles.lineMask}>
                <span className={lineIndex === 0 ? styles.line : `${styles.line} ${styles.quiet}`}>
                  {line}
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </>
  )
}
