import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

import { ISearchPictures, ISearch } from '../../interface/searchPictures'

export const fetchSearch = createAsyncThunk<ISearch, string[]>(
  'search/fetchSearch',
  async function (search, { rejectWithValue }) {
    try {
      const response = (await axios.get(`https://images-api.nasa.gov/search?media_type=${"Image".toLowerCase()}&q=${search[1]}`)).data
      return response
    } catch (error) {
      return rejectWithValue('Server error.')
    }
  }
)

type searchState = {
  status: 'pending' | 'fulfilled' | 'rejected'
  valueInput: string
  items:  ISearchPictures[]
  searchPV: string[]
  valueInputLast: string
}

const initialState: searchState = {
  status: 'fulfilled',
  valueInput: '',
  valueInputLast: '',
  items: [],
  searchPV: ["Image", "Video"]
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
        state.items = action.payload.collection.items
        state.valueInputLast = state.valueInput
        if (state.items.length > 0) {
          state.valueInput = ''
        }
        state.status = 'fulfilled'
      })
      .addCase(fetchSearch.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const { changeInput, changeSearch } = searchSlice.actions

