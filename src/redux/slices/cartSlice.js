import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsId: [],
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getId: (state, action) => {
            state.productsId.push(action.payload)
        }
    }
})

export const { getId } = cartSlice.actions
export default cartSlice.reducer;