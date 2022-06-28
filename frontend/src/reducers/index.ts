import { combineReducers } from 'redux';
import { categoryReducer } from './CategoryReducer';
import { customerReducer } from './CustomerReducer';
import { orderFormReducer } from './OrderFormReducer';
import { orderReducer } from './OrderReducer';
import { productReducer } from './ProductReducer';

export const reducer = combineReducers({
  customerReducer,
  productReducer,
  categoryReducer,
  orderReducer,
  orderFormReducer
});
