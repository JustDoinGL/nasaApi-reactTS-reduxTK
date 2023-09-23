import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { utils } from '../../utils';

import { IAsteroids, IAsteroidsDate } from '../../interface/asteroids';
import axios from 'axios';

const { api } = utils

export const fetchAsteroids = createAsyncThunk<IAsteroidsDate[], string>(
  'asteroids/fetchAsteroids',
  async function (date, { rejectWithValue }) {
    try {
      const response: IAsteroids = (await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${api}`)).data
      return response.near_earth_objects[`${date}`]
    } catch (error) {
      return rejectWithValue('Server error.');
    }
  }
);

type asteroidsState = {
  asteroids: IAsteroids | {};
  status: 'pending' | 'fulfilled' | 'rejected'
  arrAsteroids: [] | IAsteroidsDate[]
}

const initialState: asteroidsState = {
  asteroids: {},
  status: 'pending',
  arrAsteroids: []
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
        state.arrAsteroids = [...state.arrAsteroids, ...action.payload]
        state.status = 'fulfilled';
      })
      .addCase(fetchAsteroids.rejected, (state, action) => {
        state.status = 'rejected';
      })
  }
});
