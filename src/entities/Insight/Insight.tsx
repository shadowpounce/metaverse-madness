import { FC } from 'react'
import styles from './Insight.module.scss'
import { ArrowButton } from '../../shared/ArrowButton/ArrowButton'

interface IProps {
  img: string
  subtitle: string
  title: string
}

export const Insight: FC<IProps> = ({ img, subtitle, title }) => {
  return (
    <div className={styles.insight}>
      <div className={styles.content}>
        <div className={styles.thumbnail}>
          <img src={img} alt="" />
        </div>
        <div className={styles.text}>
          <h6>{title}</h6>
          <p>{subtitle}</p>
        </div>
      </div>
      <ArrowButton />
    </div>
  )
}
