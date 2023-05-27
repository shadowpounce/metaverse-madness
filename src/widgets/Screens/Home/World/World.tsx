import { WorldSlider } from '../../../../features/WorldSlider/WorldSlider'
import styles from './World.module.scss'

export const World = () => {
  return (
    <section className={styles.world}>
      <div className="gradient">
        <img src="/images/gr-3.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.wrapper}>
          <span className="section-span">The World</span>
          <h2>Choose the world you want to explore</h2>
          <WorldSlider />
        </div>
      </div>
    </section>
  )
}
