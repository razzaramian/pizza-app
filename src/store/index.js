import { configureStore } from '@reduxjs/toolkit'
import products from 'pages/Products/productSlice'

export const store = configureStore({
  reducer: {
    products,
  },
})