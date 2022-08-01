import {createAsyncThunk } from '@reduxjs/toolkit'

export const getData = createAsyncThunk(
  'posts/getData',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:4000/pizza');

      if (!res.ok) {
        throw new Error('Server side error')
      }

      const data = res.json()

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  })
