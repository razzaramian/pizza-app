import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getId: (state, action) => {
            state.cart = action.payload
        }
    }
})

export const { getId } = cartSlice.actions
export default cartSlice.reducer;