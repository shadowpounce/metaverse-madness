import styles from './Hamburger.module.scss'

export const Hamburger = () => {
  return (
    <div className={styles.hamburger}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}
