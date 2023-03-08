// rootReducer.js
import { combineReducers } from 'redux';
import productSlice from './productSlice';
import brandSlice from './brandSlice';
import bannerSlice from './bannerSlice';

const rootReducer = combineReducers({
  product: productSlice,
  brand: brandSlice,
  banner: bannerSlice,
});

export default rootReducer;
