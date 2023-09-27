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
  asteroids: IAsteroids | {}
  status: 'pending' | 'fulfilled' | 'rejected'
  arrAsteroids: [] | IAsteroidsDate[]
  countAsteroids: number
  activeAsteroids: IAsteroidsDate[]
  data: number
}

const initialState: asteroidsState = {
  asteroids: {},
  status: 'pending',
  arrAsteroids: [],
  countAsteroids: 0,
  activeAsteroids: [],
  data: 0
}

export const asteroidsSlice = createSlice({
  name: 'asteroids',
  initialState,
  reducers: {
    incrementAsteroids: (state, action: PayloadAction<IAsteroidsDate>) => {
      const asteroidIndex = state.activeAsteroids.findIndex(el => el.id === action.payload.id);
      if (asteroidIndex !== -1) {
        state.countAsteroids--;
        state.activeAsteroids.splice(asteroidIndex, 1);
      } else {
        state.countAsteroids++;
        state.activeAsteroids.push(action.payload);
      }
    },
    asteroidsData: (state) => {
      state.data += 1
    },
    deleteAsteroids: (state) => {
      state.activeAsteroids = []
      state.countAsteroids = 0
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsteroids.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAsteroids.fulfilled, (state, action) => {
        state.arrAsteroids = [...state.arrAsteroids, ...action.payload]
        state.status = 'fulfilled';
      })
      .addCase(fetchAsteroids.rejected, (state) => {
        state.status = 'rejected';
      })
  }
});

export const { incrementAsteroids, asteroidsData, deleteAsteroids } = asteroidsSlice.actions