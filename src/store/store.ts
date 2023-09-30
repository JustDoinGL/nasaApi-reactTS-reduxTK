import { configureStore } from '@reduxjs/toolkit'

import { asteroidsSlice } from './asteroids/asteroidsSlice'
import { picturesSlice } from './pictures/picturesSlice'

const store = configureStore({
  reducer: {
    asteroids: asteroidsSlice.reducer,
    pictures: picturesSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch