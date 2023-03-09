import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        {id: "1000000000000",data: { nameProduct: "Iphone 11", priceProduct: "16", amountProduct: "1", categoryProduct: "SmartPhone", brand: "Apple", img: "./img/ip11.JPG" }},

    ],
    reducers: {
        addCart: (state, action) => {
            const newdata = {
                id: Date.now(),
                data: action.payload,
            }
            state.push(newdata)
        },
        delCart: (state, action) => {
            const index = state.findIndex(data => data.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        updateCart: (state, action) => {
            const { id, data } = action.payload
            const index = state.findIndex(item => item.id === id)
            if (index !== -1) {
                state[index].data = data
            }
        },
    }
})


export const { addCart, delCart, updateCart } = cartSlice.actions
export default cartSlice.reducer


