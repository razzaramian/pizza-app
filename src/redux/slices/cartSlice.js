import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
    totalPrice: 0.00
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getId: (state, action) => {
            state.cart = action.payload
        },
        removeProdcut: (state, action) => {
            delete state.cart[action.payload]
        },
        totalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    }
})

export const { getId, removeProdcut, totalPrice } = cartSlice.actions
export default cartSlice.reducer;