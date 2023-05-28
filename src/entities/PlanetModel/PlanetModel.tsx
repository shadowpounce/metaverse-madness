import { FC } from 'react'
import styles from './PlanetModel.module.scss'
import clsx from 'clsx'
import { Model } from './Scene.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface IProps {
  direction: 'left' | 'right'
}

export const PlanetModel: FC<IProps> = ({ direction }) => {
  return (
    <div className={clsx(styles.planetModel, styles[direction])}>
      <div className={styles.model}>
        <Canvas>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh scale={[3, 3, 3]}>
            <Model />
          </mesh>
        </Canvas>
      </div>
      <div className={styles.flat}></div>
    </div>
  )
}
