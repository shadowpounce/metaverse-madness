import styles from './WorldSlide.module.scss'
import vrIcon from '/images/headset-vr.svg'
import clsx from 'clsx'

interface IWorldSlideProps {
  name: string
  thumbnail: string
  active: boolean
  onClick?: () => void
}

export const WorldSlide: React.FC<IWorldSlideProps> = ({
  thumbnail,
  name,
  active,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(styles.worldSlide, active && styles.active)}
    >
      <img src={thumbnail} alt="" className={styles.thumbnail} />
      <div className={styles.content}>
        <div className={styles.icon}>
          <img src={vrIcon} alt="" />
        </div>
        <span>ENTER METAVERSE</span>
        <h6>{name}</h6>
      </div>
    </div>
  )
}
