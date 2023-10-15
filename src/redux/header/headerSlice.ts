import { createSlice } from '@reduxjs/toolkit'

type HeaderState = {
  objHeader: Array<{
    url: string,
    name: string
  }>
}

const initialState: HeaderState = {
  objHeader: [
    { url: '/', name: 'Search' },
    { url: '/pictures', name: 'Pictures' },
    { url: `/asteroids`, name: 'Asteroids' }
  ]
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
  extraReducers: {}
})

