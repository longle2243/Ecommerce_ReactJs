import { createSlice, createSelector  } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getDataStart: state => {
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getDataFail: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const fetchData = () => async dispatch => {
  dispatch(getDataStart());
  try {
    const response = await axios.get('https://dummyjson.com/products/category/smartphones');
    dispatch(getDataSuccess(response.data));
  } catch (error) {
    dispatch(getDataFail(error.message));
  }
};

export const selectData = createSelector(
  state => state.data,
  data => data.data
);

export const { getDataStart, getDataSuccess, getDataFail } = dataSlice.actions

export default dataSlice.reducer;