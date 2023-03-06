import axios from 'axios';
import { setData } from './mySlice';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/products/category/smartphones');
    dispatch(setData(response.data));
  } catch (error) {
    console.log(error);
  }
};
