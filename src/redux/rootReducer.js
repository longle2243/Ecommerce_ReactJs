// rootReducer.js
import { combineReducers } from 'redux';
import productSlice from './productSlice';
import brandSlice from './brandSlice';

const rootReducer = combineReducers({
  product: productSlice,
  brand: brandSlice,
});

export default rootReducer;
