import { CrudCustomerActions } from '../actions/actions';
import { DataCustomer, Items, SortType, State } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';
import { getAge } from '../utils/getAge';

const initalState: State = {
  count: 0,
  rows: []
};

export function customerReducer(state = initalState, action: CrudCustomerActions) {
  switch (action.type) {
    case 'GET_CUSTOMERS':
      const newAge = action.payload.rows.map((element, index) => {
        const each = action.payload.rows[index].age;
        return {
          ...element,
          age: getAge(each ? each : '')
        };
      });
      return {
        ...state,
        rows: newAge,
        count: action.payload.count
      };

    case 'CREATE_CUSTOMER':
      const entirePerson = {
        ...action.payload,
        age: getAge(action.payload.age ? action.payload.age : '').toString()
      };
      if (state.rows.length < 10) {
        return {
          ...state,
          rows: state.rows.concat(entirePerson),
          count: state.count + 1
        };
      }
      return {
        ...state,
        rows: state.rows,
        count: state.count + 1
      };
    case 'UPDATE_CUSTOMER':
      const newArray = state.rows.map((object) => {
        if (object.id == action.payload.data.id) {
          return {
            ...object,
            name: action.payload.data.name,
            lastName: action.payload.data.lastName,
            age: action.payload.data.age,
            phone: action.payload.data.phone
          };
        }
        return object;
      });

      return {
        ...state,
        rows: newArray
      };
    case 'DELETE_CUSTOMER':
      const rest = state.rows.filter((customer) => {
        return customer.id != action.payload;
      });
      return {
        ...state,
        rows: rest,
        count: state.count - 1
      };
    default:
      return {
        ...state
      };
  }
}

export async function fetchData(
  dispatch: any,
  page: number,
  sortBy: SortType[],
  filterValues: any
) {
  const { field, sort } = sortBy[0];
  new EndpointRequest()
    .get(
      `/customer?page=${page}&pageSize=${10}&field=${field}&sort=${sort}&filter=${JSON.stringify(
        filterValues
      )}`
    )
    .then((respon) => respon.json())
    .then((res) => dispatch(action.getData(res)));
}

export async function createNewData(dispatch: any, newData: DataCustomer) {
  new EndpointRequest()
    .post('/customer', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createData(data)));
}

export async function editData(dispatch: any, newData: DataCustomer) {
  new EndpointRequest()
    .put('/customer', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.updateData(data)));
}

export async function deleteData(dispatch: any, id: string) {
  new EndpointRequest()
    .delete('/customer', id)
    .then((res) => res.json())
    .then(() => dispatch(action.deleteData(id)));
}
