import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: "1000000000000",name: "Macbook Air 2",completed: false},
    {id: "1000000000001",name: "Iphone 11",completed: false},
    {id: "1000000000002",name: "Iphone 14 Pro max",completed: false},
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
