import { CrudActions } from '../actions/actions';
import { State } from '../interfaces';



const initalState: State = {
  data: []
};

export function CustomerReducer(state = initalState, action: CrudActions) {
  switch (action.type) {
    case 'GET_CUSTOMER':
      state = {
        ...state,
        data: [action.payload.data]
      };
      return {
        ...state,
        data: action.payload.data
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
