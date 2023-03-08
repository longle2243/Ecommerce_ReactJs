import { createSlice } from '@reduxjs/toolkit'

const brandSlice = createSlice({
  name: 'brand',
  initialState: [
    {id: "1000000000000",brand: { namebrand: "Macbook Air 2" }}
  ],
  reducers: {
    setBrand: (state, action) => {
      const data = {
        id: Date.now(),
        brand: action.payload,
      }
      state.push(data)
    }
  }
})


export const { setBrand } = brandSlice.actions
export default brandSlice.reducer


