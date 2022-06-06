import { DataCategory, DataOrder, SortType, State } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

const initalState: State = {
  count: 0,
  rows: []
};

export function orderReducer(state = initalState, action: action.CrudOrderActions) {
  switch (action.type) {
    case 'GET_ORDER':
      const newRows = action.payload.rows.map((element, index) => {
        return {
          ...element,
          customer: action.payload.rows[index].Customer?.name
        }
      })
      return {
        ...state,
        rows: newRows,
        count: action.payload.count
      };

    case 'CREATE_ORDER':
      return {
        ...state,
        rows: state.rows,
        count: state.count + 1
      };
    case 'UPDATE_ORDER':
      const newArray = state.rows.map((object) => {
        if (object.id == action.payload.data.id) {
          return {
            ...object,
            customerId: action.payload.data.customerId,
            address: action.payload.data.address
          };
        }
        return object;
      });

      return {
        ...state,
        rows: newArray
      };
    case 'DELETE_ORDER':
      const rest = state.rows.filter((product) => {
        return product.id != action.payload;
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
      `/order?page=${page}&pageSize=${10}&field=${field}&sort=${sort}&filter=${JSON.stringify(
        filterValues
      )}`
    )
    .then((respon) => respon.json())
    .then((res) => dispatch(action.getOrderData(res)));
}

export async function createNewData(dispatch: any, newData: DataOrder) {
  new EndpointRequest()
    .post('/order', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createOrderData(data)));
}

export async function editData(dispatch: any, newData: DataOrder) {
  new EndpointRequest()
    .put('/order', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.updateOrderData(data)));
}

export async function deleteData(dispatch: any, id: string) {
  new EndpointRequest()
    .delete('/order', id)
    .then((res) => res.json())
    .then(() => dispatch(action.deleteOrderData(id)));
}
