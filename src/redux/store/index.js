import { configureStore } from '@reduxjs/toolkit'
import products from 'redux/slices/productSlice'
import cart from 'redux/slices/cartSlice'

export const store = configureStore({
  reducer: {
    products,
    cart
  },
})