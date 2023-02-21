import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: "1000000000000",text: "Macbook Air 2",completed: false},
    {id: "1000000000001",text: "Iphone 11",completed: false},
    {id: "1000000000002",text: "Iphone 14 Pro max",completed: false},
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      state.push(newTodo)
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    updateTodo: (state, action) => {
      const { id, text, completed } = action.payload
      const todo = state.find(todo => todo.id === id)
      if (todo) {
        todo.text = text
        todo.completed = completed
      }
    }
  }
})

const store = configureStore({
  reducer: todoSlice.reducer
})

export const { addTodo, toggleTodo, removeTodo, updateTodo  } = todoSlice.actions

export default store