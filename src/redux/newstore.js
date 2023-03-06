import { createSlice, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const slice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    addData: (state, action) => {
      state.push(action.payload);
    },
    updateData: (state, action) => {
      const index = state.findIndex((d) => d.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteData: (state, action) => {
      return state.filter((d) => d.id !== action.payload);
    },
  },
});


export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://example.com/data');
  return response.data;
});


export const dataReducer = createReducer([], (builder) => {
  builder.addCase(fetchData.fulfilled, (state, action) => {
    return action.payload;
  });
});

export const { setData, addData, updateData, deleteData } = slice.actions;
export { fetchData };
