import { CircleButton } from '../../../../shared/CircleButton/CircleButton'
import styles from './Review.module.scss'
import img from '/images/review-image.jpg'

export const Review = () => {
  return (
    <section className={styles.review}>
      <div className="gradient">
        <img src="/images/gr-7.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.button}>
            <CircleButton />
          </div>

          <h6 className={styles.name}>Samantha</h6>
          <span className={styles.position}>Founder Metaverus</span>
          <p className={styles.text}>
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </div>
        <div className={styles.image}>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}
