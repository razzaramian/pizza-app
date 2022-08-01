import { configureStore } from '@reduxjs/toolkit'
import products from 'redux/slices/productSlice'

export const store = configureStore({
  reducer: {
    products,
  },
})