import { createSlice, createAsyncThunk, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { utils } from '../../utils'
import axios from 'axios'
import { IPictures } from '../../interface/pictures'

const { api } = utils

export const fetchPictures = createAsyncThunk<IPictures[], number>(
  'pictures/fetchPictures',
  async function (count, { rejectWithValue }) {
    try {
      const response = (await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}&count=${count}&concept_tags=True&thumbs=True`)).data
      return response
    } catch (error) {
      return rejectWithValue('Server error.')
    }
  }
)

type picturesState = {
  status: 'pending' | 'fulfilled' | 'rejected'
  picturesArr: IPictures[]
}

const initialState: picturesState = {
  status: 'pending',
  picturesArr: [],
}

export const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    changeImg: (state, action: PayloadAction<string>) => {
      const index = state.picturesArr.findIndex(picture => picture.url === action.payload)
      state.picturesArr = state.picturesArr.slice(index)
    },
    changeClick: (state, action: PayloadAction<number>) => {
      state.picturesArr = state.picturesArr.slice(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPictures.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchPictures.fulfilled, (state, action) => {
        state.picturesArr.push(...action.payload)
        state.status = 'fulfilled'
      })
      .addCase(fetchPictures.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})


export const { changeImg, changeClick } = picturesSlice.actions

