import { createSlice } from '@reduxjs/toolkit'

const bannerSlice = createSlice({
  name: 'banner',
  initialState: [
    {id: "1000000000000",data: { nameProduct: "Iphone 11", priceProduct: "16tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/qcmi.JPG" }},
    {id: "1000000000001",data: { nameProduct: "Iphone 13", priceProduct: "24tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/qcip.JPG" }},
    {id: "1000000000002",data: { nameProduct: "Iphone 14 Pro Max", priceProduct: "52tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/qcss.JPG" }},

    {id: "1000000000000",data: { nameProduct: "Iphone 11", priceProduct: "16tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/qcip12.JPG" }},
    {id: "1000000000001",data: { nameProduct: "Iphone 13", priceProduct: "24tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/qclg.JPG" }},
    {id: "1000000000002",data: { nameProduct: "Iphone 14 Pro Max", priceProduct: "52tr", amountProduct: "1000", categoryProduct: "SmartPhone", img: "./img/qcsspc.JPG" }},
  ],
  reducers: {
    setBanner: (state, action) => {
      const newdata = {
        id: Date.now(),
        data: action.payload,
      }
      state.push(newdata)
    }
  }
})


export const { setBanner } = bannerSlice.actions
export default bannerSlice.reducer


