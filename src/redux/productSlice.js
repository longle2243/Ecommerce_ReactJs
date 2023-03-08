import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: [
    {id: "1000000000000",data: { nameProduct: "Iphone 11", priceProduct: "16tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/ip11.JPG" }},
    {id: "1000000000001",data: { nameProduct: "Iphone 13", priceProduct: "24tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/ip13.JPG" }},
    {id: "1000000000002",data: { nameProduct: "Iphone 14 Pro Max", priceProduct: "52tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/ip14pm.JPG" }},
    {id: "1000000000003",data: { nameProduct: "SamSung Galaxy Note 10", priceProduct: "16tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/ss10.JPG" }},
    {id: "1000000000004",data: { nameProduct: "SamSung Galaxy Ultra 20", priceProduct: "30tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/ss22.JPG" }},
    {id: "1000000000005",data: { nameProduct: "SamSung Galaxy Z Flip 4", priceProduct: "16tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/ssF4.JPG" }},


  ],
  reducers: {
    setProduct: (state, action) => {
      const newdata = {
        id: Date.now(),
        data: action.payload,
      }
      state.push(newdata)
    }
  }
})


export const { setProduct } = productSlice.actions
export default productSlice.reducer


