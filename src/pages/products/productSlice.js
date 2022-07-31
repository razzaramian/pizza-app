import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false
}

export const getData = createAsyncThunk(
  'posts/getData',
  async () => {
    const res = await fetch('http://localhost:4000/pizza')
      .then((data) => data.json())
    return res
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
    [getData.rejected]: (state) => {
      state.loading = false
    },
  },
})

export default productsSlice.reducer

