import { configureStore } from '@reduxjs/toolkit'

import { asteroidsSlice } from './asteroids/asteroidsSlice'
import { picturesSlice } from './pictures/picturesSlice'
import { searchPicturesSlice } from './search/searchPicturesSlice'

const store = configureStore({
  reducer: {
    asteroids: asteroidsSlice.reducer,
    pictures: picturesSlice.reducer,
    searchPictures: searchPicturesSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch