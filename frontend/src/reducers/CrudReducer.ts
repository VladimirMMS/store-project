import { CrudActions } from "../actions/actions";
import { Data } from "../interfaces";
import { EndpointRequest } from "../utils/fetch";


export function CrudReducer(state= {}, action: CrudActions) {
    switch (action.type) {
        case 'GET':
            state = {
                ...state,
                data: action.payload.data     
            }
            return state
        case 'POST':
            new EndpointRequest().post('/customer',action.payload)
            return state;
        

            
        default:
            return state;
    }
    
}