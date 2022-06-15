import { DataOrder, OrderState, SortType } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

const initalState: OrderState = {
  count: 0,
  rows: [],
  page: 0
};

export function orderReducer(state = initalState, action: action.CrudOrderActions) {
  switch (action.type) {
    case 'GET_ORDER':
      console.log(action.payload.rows)
      const newRows = action.payload.rows.map((element, index) => {
        return {
          ...element,
          customer: action.payload.rows[index].Customer?.name
        }
      })
      return {
        ...state,
        rows: newRows,
        count: action.payload.count,
        page: action.payload.page
      };

    case 'CREATE_ORDER':
      return state;
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
      return state;
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
    .then((res) => dispatch(action.getOrderData({...res, page})));
}

export async function createNewData(dispatch: any, newData: DataOrder, page: number) {
  const filterValues = {columnField: '', id: 0, operatorValue: '', value: ''}
  const sort = [{field: '', sort: ''}]
  await new EndpointRequest()
    .post('/order', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createOrderData(data)));

  fetchData(dispatch, page, sort, filterValues)
}

export async function editData(dispatch: any, newData: DataOrder) {
  new EndpointRequest()
    .put('/order', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.updateOrderData(data)));
}

export async function deleteData(dispatch: any, id: string, page:number) {
  const filterValues = {columnField: '', id: 0, operatorValue: '', value: ''}
  const sort = [{field: '', sort: ''}]
  await new EndpointRequest()
    .delete('/order', id)
    .then((res) => res.json())
    .then(() => dispatch(action.deleteOrderData(id)));
    fetchData(dispatch, page, sort, filterValues)
  
}
