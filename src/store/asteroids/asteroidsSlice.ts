import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { utils } from '../../utils';

import { IAsteroids, IAsteroidsDate } from '../../interface/asteroids';
import axios from 'axios';

const { api } = utils

export const fetchAsteroids = createAsyncThunk<IAsteroids, string>(
  'asteroids/fetchAsteroids',
  async function (date = "2023-09-10", { rejectWithValue }) {
    try {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${api}`)
      return response.data
    } catch (error) {
      return rejectWithValue('Server error.');
    }
  }
);

type asteroidsState = {
  asteroids: IAsteroids | {};
  status: 'pending' | 'fulfilled' | 'rejected'
  arr: [] | IAsteroidsDate[]
}

const initialState: asteroidsState = {
  asteroids: {},
  status: 'pending',
  arr: []
}

export const asteroidsSlice = createSlice({
  name: 'asteroids',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsteroids.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAsteroids.fulfilled, (state, action) => {
        state.arr = [...state.arr, ...action.payload.near_earth_objects['2023-09-10']]
        state.status = 'fulfilled';
      })
      .addCase(fetchAsteroids.rejected, (state, action) => {
        state.status = 'rejected';
      })
  }
});
