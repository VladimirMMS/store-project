import { combineReducers } from 'redux';
import { customerReducer } from './CustomerReducer';

export const reducer = combineReducers({
  customerReducer: customerReducer
});
