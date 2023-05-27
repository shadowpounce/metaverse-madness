import styles from './WhatsNew.module.scss'
import { newThings } from './data'

export const WhatsNew = () => {
  return (
    <section className={styles.whatsNew}>
      <div className="gradient">
        <img src="/images/gr-5.png" alt="" />
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="wrap">
            <span className="section-span">Whats New?</span>
            <h2>What's new about Metaversus?</h2>
            <ul className={styles.list}>
              {newThings.map((item) => (
                <li key={item.title}>
                  <div className="box">
                    <img src={item.icon} alt="" />
                  </div>
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="wrap"></div>
        </div>
      </div>
    </section>
  )
}
