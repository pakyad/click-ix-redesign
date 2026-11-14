import { caseCategories, caseStudies } from '@/lib/content'
import SeamField from './SeamField'
import styles from './CaseStudiesHero.module.css'

export default function CaseStudiesHero() {
  return (
    <section className={styles.hero} aria-labelledby="case-title">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Case studies</p>
          <h1 id="case-title" className={styles.title}>
            Work that is <span className={styles.quiet}>running now.</span>
          </h1>
          <p className={styles.lede}>
            {caseStudies.length} documented deployments in four chapters. Each story states the
            brief, what we did, and why it matters.
          </p>
          <ul className={styles.sectors} aria-label="Case study sectors">
            {caseCategories.map((category) => (
              <li key={category.id}>{category.label}</li>
            ))}
          </ul>
        </div>

        <div className={styles.fieldWrap}>
          <SeamField />
        </div>
      </div>
    </section>
  )
}
