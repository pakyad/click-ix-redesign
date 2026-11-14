import Image from 'next/image'
import styles from './CaseFigure.module.css'

export default function CaseFigure({
  image,
  ratio = 'story',
  sizes,
  className,
}: {
  readonly image: { readonly src: string; readonly alt: string }
  readonly ratio?: 'wide' | 'story'
  readonly sizes: string
  readonly className?: string
}) {
  return (
    <figure className={`${styles.figure} ${styles[ratio]} ${className ?? ''}`}>
      <div className={styles.frame}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className={styles.image}
        />
      </div>
    </figure>
  )
}
