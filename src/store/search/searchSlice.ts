import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

import { ISearchPictures, ISearchPicturesFull } from '../../interface/searchPictures'

export const fetchSearch = createAsyncThunk<ISearchPicturesFull, string[]>(
  'search/fetchSearch',
  async function (search, { rejectWithValue }) {
    try {
      const response = (await axios.get(`https://images-api.nasa.gov/search?media_type=image&q=${search[1]}`)).data
      return response
    } catch (error) {
      return rejectWithValue('Server error.')
    }
  }
)

type searchState = {
  status: 'pending' | 'fulfilled' | 'rejected'
  valueInput: string
  picture: ISearchPictures[]
  searchPV: string[]
}

const initialState: searchState = {
  status: 'fulfilled',
  valueInput: '',
  picture: [],
  searchPV: ["Picture", "Video"]
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeInput: (state, action: PayloadAction<string>) => {
      state.valueInput = action.payload
    },
    changeSearch: (state, action: PayloadAction<number>) => {
      const [first, second] = [state.searchPV[0], state.searchPV[action.payload]];
      state.searchPV[0] = second;
      state.searchPV[action.payload] = first;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.picture = action.payload.collection.items
        state.status = 'fulfilled'
      })
      .addCase(fetchSearch.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const { changeInput, changeSearch } = searchSlice.actions

