import { useEffect, useState } from 'react'
import { worldsData } from '../../data'
import { IWorld } from '../../data/interfaces'
import { WorldSlide } from './WorldSlide/WorldSlide'
import styles from './WorldSlider.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setWorlds } from '../../app/providers/store/slices/worlds/worlds.slice'
import { RootState } from '../../app/providers/store/store'

export const WorldSlider = () => {
  const [data, setData] = useState<any[] | IWorld[]>([])
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const dispatch = useDispatch()
  const worlds = useSelector((state: RootState) => state.worlds.value)

  dispatch(setWorlds(worldsData))

  useEffect(() => setData(worlds), [])

  const toggleSlide = (id: number) => {
    setActiveSlide(id)
  }

  return (
    <div className={styles.worldSlider}>
      {data.map((world: IWorld, idx: number) => (
        <WorldSlide
          key={idx}
          onClick={() => toggleSlide(idx)}
          active={idx === activeSlide && true}
          thumbnail={world.thumbnail}
          name={world.name}
        />
      ))}
    </div>
  )
}
