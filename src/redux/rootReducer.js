// rootReducer.js
import { combineReducers } from 'redux';
import productSlice from './productSlice';
import brandSlice from './brandSlice';
import bannerSlice from './bannerSlice';
import cartSlice from './cartSlice';
import paySlice from './paySlice';

const rootReducer = combineReducers({
  product: productSlice,
  brand: brandSlice,
  banner: bannerSlice,
  cart: cartSlice,
  pay: paySlice,
});

export default rootReducer;
