import type { RootState } from '../../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWorld } from '../../../../../data/interfaces'

interface IWorldState {
  value: IWorld[] | any[]
}

const initialState: IWorldState = {
  value: [],
}

export const worldsSlice = createSlice({
  name: 'worlds',
  initialState,
  reducers: {
    setWorlds: (state: IWorldState, action: PayloadAction<IWorld[]>) => {
      state.value = action.payload
    },
  },
})

export const { setWorlds } = worldsSlice.actions

export const selectWorlds = (state: RootState) => state.worlds.value

export default worldsSlice.reducer
