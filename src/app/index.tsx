import { pages } from '../pages'
import { Route } from 'react-router-dom'
import { WithRoutes } from './providers/WithRoutes'
import { WithSmoothScroll } from './providers/WithSmoothScroll'
import { Layout } from '../shared/Layout/Layout'
import { Provider } from 'react-redux'
import { store } from './providers/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <WithRoutes>
        {pages.map((page) => (
          <Route
            path={page.path}
            element={
              <WithSmoothScroll>
                <Layout>{page.element}</Layout>
              </WithSmoothScroll>
            }
            key={page.path}
          ></Route>
        ))}
      </WithRoutes>
    </Provider>
  )
}

export default App
