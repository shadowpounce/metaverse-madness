import styles from './SocialLink.module.scss'

interface IProps {
  children: React.ReactNode
  href: string
}

export const SocialLink: React.FC<IProps> = ({ children, href }) => {
  return (
    <a href={href} className={styles.socialLink}>
      <div className={styles.icon}>{children}</div>
    </a>
  )
}
