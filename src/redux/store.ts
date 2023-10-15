import { configureStore } from '@reduxjs/toolkit'

import { asteroidsSlice } from './asteroids/asteroidsSlice'
import { picturesSlice } from './pictures/picturesSlice'
import { searchSlice } from './search/searchSlice'
import { headerSlice } from './header/headerSlice'

const store = configureStore({
  reducer: {
    asteroids: asteroidsSlice.reducer,
    pictures: picturesSlice.reducer,
    search: searchSlice.reducer,
    header: headerSlice.reducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch