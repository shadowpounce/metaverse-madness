import { InsightList } from '../../../../features/InsightList/InsightList'
import styles from './Insights.module.scss'

export const Insights = () => {
  return (
    <section className={styles.insights}>
      <div className="container">
        <span className="section-span">Insights</span>
        <h2>Insights about metaverse</h2>
        <InsightList />
      </div>
    </section>
  )
}
