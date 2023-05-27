import { configureStore } from '@reduxjs/toolkit'
import insightsSlice from './slices/insights/insights.slice'
import worldsSlice from './slices/worlds/worlds.slice'

// ...

export const store = configureStore({
  reducer: {
    insights: insightsSlice,
    worlds: worldsSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
