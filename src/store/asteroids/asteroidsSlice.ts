import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { utils } from '../../utils'
import { IAsteroidsDate } from '../../interface/asteroids'
import { RootState } from '../store'

const { api } = utils

const ASTEROID_ID_KEY = 'asteroid_name'

const getAsteroidFromLocalStorage = (): IAsteroidsDate[] => {
  const asteroid = localStorage.getItem(ASTEROID_ID_KEY)
  return asteroid ? JSON.parse(asteroid) : []
}

export const fetchAsteroids = createAsyncThunk<IAsteroidsDate[], string>(
  'asteroids/fetchAsteroids',
  async function (date, { rejectWithValue }) {
    try {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${api}`)
      return response.data.near_earth_objects[date]
    } catch (error) {
      return rejectWithValue('Server error.')
    }
  }
)

type AsteroidsState = {
  asteroid: IAsteroidsDate[]
  status: 'pending' | 'fulfilled' | 'rejected'
  arrAsteroids: IAsteroidsDate[]
  countAsteroids: number
  activeAsteroids: IAsteroidsDate[]
  data: number
  activeKilometers: boolean
}

const initialState: AsteroidsState = {
  asteroid: getAsteroidFromLocalStorage(),
  status: 'pending',
  arrAsteroids: [],
  countAsteroids: 0,
  activeAsteroids: [],
  data: 0,
  activeKilometers: false,
}

export const asteroidsSlice = createSlice({
  name: 'asteroids',
  initialState,
  reducers: {
    incrementAsteroids: (state, action: PayloadAction<IAsteroidsDate>) => {
      const asteroidIndex = state.activeAsteroids.findIndex((el) => el.id === action.payload.id)
      if (asteroidIndex !== -1) {
        state.countAsteroids--
        state.activeAsteroids.splice(asteroidIndex, 1)
      } else {
        state.countAsteroids++
        state.activeAsteroids.push(action.payload)
      }
    },
    asteroidsData: (state) => {
      state.data++
    },
    deleteAsteroids: (state) => {
      state.activeAsteroids = []
      state.countAsteroids = 0
    },
    getAsteroid: (state, action: PayloadAction<string>) => {
      const asteroid = state.arrAsteroids.filter((el) => el.id === action.payload)
      if (asteroid.length) {
        state.asteroid = asteroid
        localStorage.setItem(ASTEROID_ID_KEY, JSON.stringify(asteroid))
      }
    },
    isActiveKilometers: (state) => {
      state.activeKilometers = !state.activeKilometers
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsteroids.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchAsteroids.fulfilled, (state, action) => {
        state.arrAsteroids = [...state.arrAsteroids, ...action.payload]
        state.status = 'fulfilled'
      })
      .addCase(fetchAsteroids.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const getAsteroidsSelector = (state: RootState) => state.asteroids

export const { incrementAsteroids, asteroidsData, deleteAsteroids, getAsteroid, isActiveKilometers } = asteroidsSlice.actions