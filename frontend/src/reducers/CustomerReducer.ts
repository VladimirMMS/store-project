import { CrudActions } from '../actions/actions';
import { DataCustomer, State } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

const initalState: State = {
  data: []
};

export function customerReducer(state = initalState, action: CrudActions) {
  switch (action.type) {
    case 'GET_CUSTOMERS':
      state = {
        ...state,
        data: [action.payload]
      };
      return {
        ...state,
        data: action.payload
      };

    case 'CREATE_CUSTOMER':
      const stateObject = state.data.concat(action.payload);
      return {
        ...state,
        data: stateObject
      };
    default:
      return {
        ...state
      };
  }
}

export async function fetchData(dispatch: any) {
  await new EndpointRequest()
    .get('/customer')
    .then((respon) => respon.json())
    .then((res) => dispatch({ type: 'GET_CUSTOMERS', payload: res }));
}

export async function saveNewData(dispatch: any, newData: DataCustomer) {
  await new EndpointRequest()
    .post('/customer', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createData(data)));
}
