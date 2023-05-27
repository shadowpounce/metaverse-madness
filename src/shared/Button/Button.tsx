import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IProps {
  children: ReactNode
}

export const Button: FC<IProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}
