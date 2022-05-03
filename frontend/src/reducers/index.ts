import { combineReducers } from 'redux';
import { CustomerReducer } from './CustomerReducer';

export const reducer = combineReducers({
  crudReducer: CustomerReducer
});
