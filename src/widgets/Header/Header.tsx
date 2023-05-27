import { Hamburger } from '../../shared/Hamburger/Hamburger'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="gradient">
        <img src="/images/gr-1.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.logo}>
          <Logo />
        </div>
        <Hamburger />
      </div>
    </header>
  )
}

export default Header
