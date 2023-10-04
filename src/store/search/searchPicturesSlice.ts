import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

import { ISearchPictures, ISearchPicturesFull } from '../../interface/searchPictures'

export const fetchSearchPictures = createAsyncThunk<ISearchPicturesFull, string>(
  'searchPictures/fetchPictures',
  async function (search, { rejectWithValue }) {
    try {
      const response = (await axios.get(`https://images-api.nasa.gov/search?media_type=image&q=${search}`)).data
      return response
    } catch (error) {
      return rejectWithValue('Server error.')
    }
  }
)

type searchPicturesState = {
  status: 'pending' | 'fulfilled' | 'rejected'
  valueInput: string
  picture: ISearchPictures[]
}

const initialState: searchPicturesState = {
  status: 'fulfilled',
  valueInput: '',
  picture: [],
}

export const searchPicturesSlice = createSlice({
  name: 'searchPictures',
  initialState,
  reducers: {
    changeInput: (state, action: PayloadAction<string>) => {
      state.valueInput = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchPictures.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchSearchPictures.fulfilled, (state, action) => {
        state.picture = action.payload.collection.items
        state.status = 'fulfilled'
      })
      .addCase(fetchSearchPictures.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const { changeInput } = searchPicturesSlice.actions

