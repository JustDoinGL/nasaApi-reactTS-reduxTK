import { configureStore } from '@reduxjs/toolkit'

import { asteroidsSlice } from './asteroids/asteroidsSlice'

const store = configureStore({
  reducer: {
    asteroids: asteroidsSlice.reducer
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;