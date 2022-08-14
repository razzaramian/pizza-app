import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
    totalPrice: 0
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
        calcTotalPrice: (state) => {
            let sum = []

            for (let key in state.cart) {
                sum.push(+state.cart[key].price);
            }

            const total = sum.reduce((sum, arg) => {
                return sum + arg
            }, 0);

            state.totalPrice = (total).toFixed(2)
        }
    }
})

export const { getId, removeProdcut, calcTotalPrice } = cartSlice.actions
export default cartSlice.reducer;