import { About } from './About/About'
import { Hero } from './Hero/Hero'
import { Insights } from './Insights/Insights'
import { Review } from './Review/Review'
import { Steps } from './Steps/Steps'
import { WhatsNew } from './WhatsNew/WhatsNew'
import { World } from './World/World'

export const homeScreens = [
  {
    id: 1,
    element: <Hero />,
  },
  {
    id: 2,
    element: <About />,
  },
  {
    id: 3,
    element: <World />,
  },
  {
    id: 4,
    element: <Steps />,
  },
  {
    id: 5,
    element: <WhatsNew />,
  },
  {
    id: 7,
    element: <Insights />,
  },
  {
    id: 8,
    element: <Review />,
  },
]
