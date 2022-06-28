import * as action from '../actions/actions';
import { orderInitial } from '../interfaces';

const initialState: orderInitial = {
    customer: '',
    products: '',
    address: ''
  }
export function orderFormReducer(state = initialState, action: action.OrderFormAction) {
  switch (action.type) {
    case 'GET_INITIAL_STATE':
      return initialState

    case 'GET_CURRENT_STATE':
      const current = {
        customer: action.payload.customer,
        address: action.payload.address
      };
      return current;
        

    default:
      return state
      
  }
}
