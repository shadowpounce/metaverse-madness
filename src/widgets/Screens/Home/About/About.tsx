import styles from './About.module.scss'
import arrowDownIcon from '/images/arrow-down.svg'

export const About = () => {
  return (
    <section className={styles.about}>
      <div className="gradient">
        <img src="/images/gr-2.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.wrapper}>
          <span className="section-span">About Metaversus</span>
          <p className={styles.text}>
            <span>Metaverse</span> is a new thing in the future, where you can
            enjoy the virtual world by feeling like it's really real, you can
            feel what you feel in this metaverse world, because this is really
            the <span>madness of the metaverse</span> of today, using only{' '}
            <span>VR</span> devices you can easily explore the metaverse world
            you want, turn your dreams into reality. Let's <span>explore</span>{' '}
            the madness of the metaverse by scrolling down
          </p>
          <img src={arrowDownIcon} alt="" className={styles.arrowDown} />
        </div>
      </div>
    </section>
  )
}
