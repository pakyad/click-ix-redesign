import Link from 'next/link'
import styles from './PageHeader.module.css'

export interface PageHeaderFact {
  readonly label: string
  readonly value: string
}

/**
 * The one page header used by every route that is not the homepage.
 *
 * Before this existed each page repeated the same three lines with its own
 * spacing, so twenty pages read as twenty templates. One component means the
 * title, the two-tone clause, the measure of the lede and the facts rule are
 * identical everywhere, and a change lands in one place.
 */
export default function PageHeader({
  eyebrow,
  title,
  quiet,
  lede,
  facts,
  contents,
  back,
}: {
  readonly eyebrow: string
  readonly title: string
  readonly quiet?: string
  readonly lede: string
  readonly facts?: readonly PageHeaderFact[]
  readonly contents?: readonly string[]
  readonly back?: { readonly href: string; readonly label: string }
}) {
  return (
    <section className={styles.header} aria-labelledby="page-title" data-arrive>
      <div className={`wrap ${styles.inner}`}>
        {back ? (
          <Link href={back.href} className={styles.back}>
            <span aria-hidden="true">←</span> {back.label}
          </Link>
        ) : null}

        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

        <h1 id="page-title" className={styles.title}>
          {title}
          {quiet ? <span className={styles.quiet}> {quiet}</span> : null}
        </h1>

        <p className={styles.lede}>{lede}</p>

        {contents && contents.length > 0 ? (
          <ul className={styles.contents}>
            {contents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {facts && facts.length > 0 ? (
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  )
}
