import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getId: (state, action) => {
            state.inCart.push(action.payload)
        }
    }
})

export const { getId } = cartSlice.actions
export default cartSlice.reducer;