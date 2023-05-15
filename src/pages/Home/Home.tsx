import React from 'react'
import { homeScreens } from '../../widgets/Screens/Home'

export const Home = () => {
  return (
    <main>
      {homeScreens.map((screen) => (
        <React.Fragment key={screen.id}>{screen.element}</React.Fragment>
      ))}
    </main>
  )
}
