import styles from './CircleButton.module.scss'
import mouseIcon from '/images/mouse.svg'
import circleText from '/images/circle-text.svg'

export const CircleButton = () => {
  return (
    <button className={styles.circleButton}>
      <img className={styles.mouse} src={mouseIcon} alt="" />
      <img src={circleText} alt="" className={styles.circleText} />
    </button>
  )
}
