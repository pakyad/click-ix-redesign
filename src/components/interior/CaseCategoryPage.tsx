import Link from 'next/link'
import { caseCategories, casesForCategory, type CaseCategoryId } from '@/lib/content'
import CaseFigure from '@/components/case/CaseFigure'
import PageHeader from '@/components/layout/PageHeader'
import styles from './Cases.module.css'
import { mailto } from '@/lib/contact'

const closing: Readonly<
  Record<CaseCategoryId, { readonly heading: string; readonly action: string }>
> = {
  'out-of-home-advertisers': {
    heading: 'Start with the moment.',
    action: 'Talk about a live deployment',
  },
  'retail-malls': {
    heading: 'Start with the store list.',
    action: 'Talk about a retail deployment',
  },
  'medical-pharma': {
    heading: 'Start with the screen list.',
    action: 'Talk about a hospital deployment',
  },
  'fmcg-others': {
    heading: 'Start with the shelf.',
    action: 'Talk about an in-store deployment',
  },
}

export default function CaseCategoryPage({ categoryId }: { readonly categoryId: CaseCategoryId }) {
  const category = caseCategories.find((entry) => entry.id === categoryId)
  if (!category) throw new Error(`Unknown case category: ${categoryId}`)

  const studies = casesForCategory(categoryId)
  const position = caseCategories.findIndex((entry) => entry.id === categoryId)
  const next = caseCategories[(position + 1) % caseCategories.length]
  const end = closing[categoryId]

  return (
    <main id="main-content" className={styles.page}>
      <PageHeader
        eyebrow="Case studies"
        title={category.label}
        lede={category.line}
        back={{ href: '/case-studies/', label: 'All case studies' }}
      />

      <section className={`section--paper ${styles.storiesSection}`}>
        <div className="wrap">
          {studies.map((study) => (
            <article key={study.id} id={study.id} className={styles.story} data-reveal>
              <div
                className={`${styles.storyGrid} ${
                  study.image ? '' : styles.storyGridNoMedia
                }`}
              >
                <div className={styles.storyHead}>
                  <p className={styles.storyClient}>{study.client}</p>
                  <h2 className={styles.storyTitle}>{study.title}</h2>
                  <p className={styles.storyBrief}>{study.brief}</p>
                  <p className={styles.storyMeta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaLabel}>Where</span> {study.where}
                    </span>
                    <span className={styles.metaItem}>
                      <span className={styles.metaLabel}>Systems</span>{' '}
                      {study.systems.join(' · ')}
                    </span>
                  </p>
                </div>

                {study.image ? (
                  <div className={styles.storyMedia}>
                    <CaseFigure
                      image={study.image}
                      sizes="(max-width: 960px) 100vw, 40vw"
                    />
                  </div>
                ) : null}

                <div className={styles.storyDid}>
                  <h3 className={styles.noteLabel}>What we did</h3>
                  <ul className={styles.didList}>
                    {study.did.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.storyWhy}>
                  <h3 className={styles.noteLabel}>Why it matters</h3>
                  <p className={styles.whyText}>{study.why}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section--light">
        <div className="wrap">
          <Link
            href={next.route}
            className={styles.next}
            data-reveal
            aria-label={`Next chapter: ${next.label}. ${next.line}`}
          >
            <span>
              <span className={styles.nextLabel}>Next chapter</span>
              <span className={styles.nextTitle}>{next.label}</span>
            </span>
            <span className={styles.nextLine}>{next.line}</span>
            <span className={styles.nextArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="section--paper">
        <div className={`wrap ${styles.end}`}>
          <div>
            <h2 className="h2">{end.heading}</h2>
          </div>
          <div className={styles.endActions}>
            <Link href={mailto('Enquiry')} className="btn">
              {end.action} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
