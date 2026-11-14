import styles from './PromoBar.module.css'

/**
 * The APAC launch strip, rebuilt from the original banner.
 *
 * Same structure — gradient field, the line, the Visit page action and the
 * Woohoo award lockup — set in the site's own type so it stays crisp and
 * responsive. The award is the supplied artwork, lifted off the banner and
 * placed on the white end of the field.
 */
export default function PromoBar() {
  return (
    <aside className={styles.bar} aria-label="City Screen in APAC">
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.text}>
          Click iX presents <strong>City Screen in APAC</strong>
        </p>

        <a
          className={styles.cta}
          href="https://www.cityscreen.cloud/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit page
          <span className="sr-only"> (opens in a new tab)</span>
        </a>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.award}
          src="/brand/apac/apac-award.png"
          alt="Woohoo APAC Regional Forum in Bali — sponsor"
          width={171}
          height={71}
          loading="lazy"
          decoding="async"
        />
      </div>
    </aside>
  )
}
