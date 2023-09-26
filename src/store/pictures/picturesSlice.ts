import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { utils } from '../../utils';

import axios from 'axios';

import { IPictures } from '../../interface/pictures';

const { api } = utils

export const fetchPictures = createAsyncThunk<IPictures[], number>(
  'pictures/fetchPictures',
  async function (count, { rejectWithValue }) {
    try {
      const response = (await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}&count=${count}&concept_tags=True`)).data
      return response
    } catch (error) {
      return rejectWithValue('Server error.');
    }
  }
);

type picturesState = {
  picturesArr: IPictures[]
  status: 'pending' | 'fulfilled' | 'rejected'
}

const initialState: picturesState = {
  picturesArr: [],
  status: 'pending'
}

export const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPictures.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPictures.fulfilled, (state, action) => {
        state.picturesArr = action.payload
        state.status = 'fulfilled';
      })
      .addCase(fetchPictures.rejected, (state) => {
        state.status = 'rejected';
      })
  }
});

export const {  } = picturesSlice.actions