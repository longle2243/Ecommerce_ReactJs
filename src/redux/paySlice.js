import { createSlice } from '@reduxjs/toolkit'

const paySlice = createSlice({
    name: 'pay',
    initialState: [

    ],
    reducers: {
        addPay: (state, action) => {
            const newdata = {
                id: Date.now(),
                data: action.payload,
            }
            state.push(newdata)
        },
        delPay: (state, action) => {
            const index = state.findIndex(data => data.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        updatePay: (state, action) => {
            const { id, data } = action.payload
            const index = state.findIndex(item => item.id === id)
            if (index !== -1) {
                state[index].data = data
            }
        },
    }
})


export const { addPay, delPay, updatePay } = paySlice.actions
export default paySlice.reducer


