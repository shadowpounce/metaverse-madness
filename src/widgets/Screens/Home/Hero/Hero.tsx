import { SocialLink } from '../../../../shared/SocialLink/SocialLink'
import styles from './Hero.module.scss'
import React from 'react'
import picture from '/images/hero_picture.jpg'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'
import { socialLinks } from '../../../../data'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.row}>
          <span className="section-span">Home</span>
          <div className={styles.title}>
            <h1>METAVERSE</h1>
            <h1>
              MA
              <svg
                width="212"
                height="108"
                viewBox="0 0 212 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9H162C184.644 9 203 27.3563 203 50V58C203 80.6437 184.644 99 162 99H9V9Z"
                  stroke="white"
                  strokeWidth="18"
                />
              </svg>
              NESS
            </h1>
          </div>
          <ul className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <React.Fragment key={link.href}>
                <SocialLink href={link.href}>
                  <img src={link.icon} alt="" />
                </SocialLink>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className={styles.picture}>
          <img src={picture} alt="" />
          <div className={styles.button}>
            <CircleButton />
          </div>
        </div>
      </div>
    </section>
  )
}
