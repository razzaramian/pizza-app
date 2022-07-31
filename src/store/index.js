import { configureStore } from '@reduxjs/toolkit'
import productsReducer from 'pages/products/productSlice'

export const store = configureStore({
  reducer: {
    productsReducer,
  },
})