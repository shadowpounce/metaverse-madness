import type { RootState } from '../../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInsight } from '../../../../../data/interfaces'

interface IInsightState {
  value: IInsight[] | any[]
}

const initialState: IInsightState = {
  value: [],
}

export const insightsSlice = createSlice({
  name: 'insights',
  initialState,
  reducers: {
    setInsights: (state: IInsightState, action: PayloadAction<IInsight[]>) => {
      state.value = action.payload
    },
  },
})

export const { setInsights } = insightsSlice.actions

export const selectInsights = (state: RootState) => state.insights.value

export default insightsSlice.reducer
