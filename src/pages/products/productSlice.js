import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false,
  error: ''
}

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

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.products = payload
    },
    [getData.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default productsSlice.reducer

