import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'product',
  initialState: [
    {id: "1000000000000",name: { nameProduct: "Macbook Air 2", priceProduct: "24tr", amountProduct: "1000", categoryProduct: "Laptop", img: "./img/qcip12.JPG" },completed: false},
    {id: "1000000000001",name: { nameProduct: "Iphone 11", priceProduct: "14tr", amountProduct: "800", categoryProduct: "Smartphone", img: "./img/qcip.JPG" },completed: false},
    {id: "1000000000002",name: { nameProduct: "Iphone 14 Pro max", priceProduct: "52tr", amountProduct: "300", categoryProduct: "Smartphone", img: "./img/qcss.JPG" },completed: false},
    {id: "1000000000000",name: { nameProduct: "Macbook Air 2", priceProduct: "24tr", amountProduct: "1000", categoryProduct: "Laptop", img: "./img/qcss.JPG" },completed: false},
    {id: "1000000000001",name: { nameProduct: "Iphone 11", priceProduct: "14tr", amountProduct: "800", categoryProduct: "Smartphone", img: "./img/ip11.JPG" },completed: false},
    {id: "1000000000002",name: { nameProduct: "Iphone 14 Pro max", priceProduct: "52tr", amountProduct: "300", categoryProduct: "Smartphone", img: "./img/ip14pm.JPG" },completed: false},
    {id: "1000000000000",name: { nameProduct: "Macbook Air 2", priceProduct: "24tr", amountProduct: "1000", categoryProduct: "Laptop", img: "./img/bookm1.JPG" },completed: false},
    {id: "1000000000001",name: { nameProduct: "Iphone 11", priceProduct: "14tr", amountProduct: "800", categoryProduct: "Smartphone", img: "./img/ip11.JPG" },completed: false},
    {id: "1000000000002",name: { nameProduct: "Iphone 14 Pro max", priceProduct: "52tr", amountProduct: "300", categoryProduct: "Smartphone", img: "./img/ip14pm.JPG" },completed: false},
    {id: "1000000000000",name: { nameProduct: "Macbook Air 2", priceProduct: "24tr", amountProduct: "1000", categoryProduct: "Laptop", img: "./img/bookm1.JPG" },completed: false},
    {id: "1000000000001",name: { nameProduct: "Iphone 11", priceProduct: "14tr", amountProduct: "800", categoryProduct: "Smartphone", img: "./img/ip11.JPG" },completed: false},
    {id: "1000000000002",name: { nameProduct: "Iphone 14 Pro max", priceProduct: "52tr", amountProduct: "300", categoryProduct: "Smartphone", img: "./img/ip14pm.JPG" },completed: false},
  ],
  reducers: {
    createProduct: (state, action) => {
      const newTodo = {
        id: Date.now(),
        name: action.payload,
        completed: false
      }
      state.push(newTodo)
    },
    softDeleteProduct: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteProduct: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    updateTodo: (state, action) => {
      const { id, name, completed } = action.payload
      const todo = state.find(todo => todo.id === id)
      if (todo) {
        todo.name = name
        todo.completed = completed
      }
    }
  }
})

const store = configureStore({
  reducer: todoSlice.reducer
})

export const { createProduct, softDeleteProduct, deleteProduct, updateTodo  } = todoSlice.actions

export default store


