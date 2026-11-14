import { clients } from '@/lib/clients'
import styles from './ClientRow.module.css'

/**
 * Clientele band.
 *
 * The marks are shown as marks: no tile, no frame, no plate. Each asset was
 * lifted off its captured background and trimmed to its own ink, so the row is
 * logos on paper rather than a wall of white boxes. Nothing is recoloured,
 * cropped or re-proportioned — only the empty margin around each mark is gone.
 *
 * One row, slow enough to read. Pauses on hover and on keyboard focus, stops
 * under reduced motion, where the same marks fall back to a static wrap. The
 * accessible names live in a hidden list; the moving row is decorative.
 */
export default function ClientRow() {
  return (
    <section className={styles.band} aria-labelledby="clients-title" data-arrive>
      <div className="wrap">
        <h2 id="clients-title" className={styles.label}>
          Trusted by teams at
        </h2>
      </div>

      <div className={`wrap ${styles.rail}`} aria-hidden="true">
        <div className={styles.viewport}>
          <div className={styles.track}>
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.set}>
                {clients.map((client) => (
                  <li key={`${copy}-${client.name}`} className={styles.mark}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.src}
                      alt=""
                      width={client.width}
                      height={client.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* The accessible list. The carousel above is decorative. */}
      <div className="wrap">
        <ul className={styles.srList}>
          {clients.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
