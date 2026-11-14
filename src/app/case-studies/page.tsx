import type { Metadata } from 'next'
import Link from 'next/link'
import CaseStudiesHero from '@/components/case/CaseStudiesHero'
import CaseFigure from '@/components/case/CaseFigure'
import { caseCategories, casesForCategory, caseStudies, type CaseStudy } from '@/lib/content'
import { routes } from '@/lib/routes'
import styles from '@/components/interior/Cases.module.css'
import { mailto } from '@/lib/contact'

const route = routes.caseStudies

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
}

const storyHref = (study: CaseStudy) => {
  const category = caseCategories.find((entry) => entry.id === study.category)
  return `${category?.route ?? route.path}#${study.id}`
}

export default function CaseStudiesPage() {
  const featured = caseStudies.find((study) => study.id === 'maxis') ?? caseStudies[0]
  const featuredCategory = caseCategories.find((category) => category.id === featured.category)

  return (
    <main id="main-content" className={styles.page}>
      <CaseStudiesHero />

      <section className="section--paper" aria-labelledby="featured-title">
        <div className="wrap">
          <article className={styles.featured} data-reveal>
            <div className={styles.featuredMedia}>
              {featured.image ? (
                <CaseFigure
                  image={featured.image}
                  ratio="wide"
                  sizes="(max-width: 960px) 100vw, 55vw"
                />
              ) : null}
            </div>
            <div className={styles.featuredCopy}>
              <p className={styles.featuredClient}>
                {featured.client} · {featuredCategory?.label}
              </p>
              <h2 id="featured-title" className={styles.featuredTitle}>
                {featured.title}
              </h2>
              <p className={styles.featuredBrief}>{featured.brief}</p>
              <p className={styles.featuredLink}>
                <Link href={storyHref(featured)} className="link-arrow">
                  Read the full story <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section--light" aria-label="Chapters">
        <div className="wrap">
          <ul className={styles.chapters} data-reveal>
            {caseCategories.map((category) => {
              const studies = casesForCategory(category.id)
              return (
                <li key={category.id}>
                  <Link
                    href={category.route}
                    className={styles.chapter}
                    aria-label={`${category.label}. ${category.line} ${studies.length} ${
                      studies.length === 1 ? 'story' : 'stories'
                    }.`}
                  >
                    <span className={styles.chapterLabel}>{category.label}</span>
                    <span className={styles.chapterLine}>{category.line}</span>
                    <span className={styles.chapterMeta}>
                      <span>
                        {studies.length} {studies.length === 1 ? 'story' : 'stories'}
                      </span>
                      <span className={styles.chapterArrow} aria-hidden="true">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section--paper" aria-labelledby="archive-title">
        <div className="wrap">
          <h2 id="archive-title" className="h2">
            The archive.
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Deployment</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Systems</th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map((study) => {
                  const category = caseCategories.find((entry) => entry.id === study.category)

                  return (
                    <tr key={study.id}>
                      <th scope="row">
                        <Link href={storyHref(study)} className={styles.tableLink}>
                          {study.client}
                        </Link>
                      </th>
                      <td>{category?.label}</td>
                      <td>{study.systems.join(' · ')}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section--paper">
        <div className={`wrap ${styles.end}`}>
          <div>
            <h2 className="h2">Start with your screen list.</h2>
          </div>
          <div className={styles.endActions}>
            <Link href={mailto('Enquiry')} className="btn">
              Start a review <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
