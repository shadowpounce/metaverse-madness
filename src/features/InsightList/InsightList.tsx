import { useEffect, useState } from 'react'
import styles from './InsightList.module.scss'
import { IInsight } from '../../data/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { setInsights } from '../../app/providers/store/slices/insights/insights.slice'
import { insightsData } from '../../data'
import { RootState } from '../../app/providers/store/store'
import { Insight } from '../../entities/Insight/Insight'

export const InsightList = () => {
  const [data, setData] = useState<any[] | IInsight[]>([])

  const dispatch = useDispatch()
  dispatch(setInsights(insightsData))

  const insights = useSelector((state: RootState) => state.insights.value)

  useEffect(() => setData(insights), [])

  return (
    <div className={styles.insightList}>
      {data &&
        data.map((insight: IInsight) => (
          <Insight
            key={insight.title}
            img={insight.thumbnail}
            title={insight.title}
            subtitle={insight.subtitle}
          />
        ))}
    </div>
  )
}
