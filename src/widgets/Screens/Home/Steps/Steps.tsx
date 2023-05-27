import styles from './Steps.module.scss'
import { steps } from './data'

export const Steps = () => {
  return (
    <section className={styles.steps}>
      <div className="gradient">
        <img src="/images/gr-4.png" alt="" />
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="wrap"></div>
          <div className="wrap">
            <span className="section-span">How Metaversus Works</span>
            <h2>Get started with just a few clicks</h2>
            <ul className={styles.list}>
              {steps.map((step) => (
                <li key={step.id}>
                  <div className="box">0{step.id}</div>
                  <p>{step.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
