import { SocialLink } from '../../../../shared/SocialLink/SocialLink'
import styles from './Hero.module.scss'
import { heroSocialLinks } from './data'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.row}>
          <span className="section-span">Home</span>
          <div className={styles.title}>
            <h1>METAVERSE</h1>
            <h1>MADNESS</h1>
          </div>
          <ul className={styles.socialLinks}>
            {heroSocialLinks.map((link) => (
              <SocialLink href={link.href}>
                <img src={link.icon} alt="" />
              </SocialLink>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
