import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { utils } from '../../utils'
import { IPictures } from '../../interface/pictures'
import { RootState } from '../store'
import { Status } from '../@types/enum'

const { api } = utils

export const fetchPictures = createAsyncThunk<IPictures[], number>(
  'pictures/fetchPictures',
  async function (count, { rejectWithValue }) {
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}&count=${count}&concept_tags=True&thumbs=True`)
      return response.data
    } catch (error) {
      return rejectWithValue('Server error.')
    }
  }
)

type PicturesState = {
  status: Status
  picturesArr: IPictures[]
}

const initialState: PicturesState = {
  status: Status.pending,
  picturesArr: [],
}

export const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    changeImg: (state, action: PayloadAction<string>) => {
      const index = state.picturesArr.findIndex((picture) => picture.url === action.payload)
      state.picturesArr = state.picturesArr.slice(index)
    },
    changeClick: (state, action: PayloadAction<number>) => {
      if (action.payload === -1) {
        const photo = state.picturesArr[state.picturesArr.length - 1]
        state.picturesArr = [photo, ...state.picturesArr.slice(0, state.picturesArr.length - 2)]
      } else {
        state.picturesArr = state.picturesArr.slice(action.payload)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPictures.pending, (state) => {
        state.status = Status.pending
      })
      .addCase(fetchPictures.fulfilled, (state, action) => {
        state.picturesArr = [...state.picturesArr, ...action.payload]
        state.status = Status.fulfilled
      })
      .addCase(fetchPictures.rejected, (state) => {
        state.status = Status.rejected
      })
  },
})

export const getPicturesSelector = (state: RootState) => state.pictures

export const { changeImg, changeClick } = picturesSlice.actions