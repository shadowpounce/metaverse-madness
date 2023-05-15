import styles from './Logo.module.scss'

import logoImage from '/images/logo.svg'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImage} alt="" />
    </div>
  )
}
