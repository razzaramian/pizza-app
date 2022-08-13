import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
}
console.log(initialState.cart)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getId: (state, action) => {
            state.cart = action.payload
        },
        removeProdcut: (state, action) => {
            delete state.cart[action.payload]
        }
    }
})

export const { getId, removeProdcut } = cartSlice.actions
export default cartSlice.reducer;