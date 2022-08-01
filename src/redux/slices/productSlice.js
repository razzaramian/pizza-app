import { createSlice } from '@reduxjs/toolkit'

import { getData } from 'redux/thunks/productSlice'

const initialState = {
  products: [],
  loading: false,
  error: ''
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false
      state.products = action.payload
    },
    [getData.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default productsSlice.reducer

