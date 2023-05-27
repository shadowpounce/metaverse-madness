import { socialLinks } from '../../data'
import { Button } from '../../shared/Button/Button'
import { Logo } from '../../shared/Logo/Logo'
import { SocialLink } from '../../shared/SocialLink/SocialLink'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="gradient">
        <img src="/images/gr-6.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.row}>
          <h2>Enter the Metaverse</h2>
          <Button>
            <img src="/images/headset-vr.svg" alt="" />
            ENTER THE METAVERSE
          </Button>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <small className={styles.copyright}>
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </small>
          <ul className={styles.socials}>
            {socialLinks.map((link) => (
              <SocialLink key={link.href} href={link.href}>
                <img src={link.icon} alt="" />
              </SocialLink>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
