import { DataOrder, OrderState, SortType } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

const initalState: OrderState = {
  count: 0,
  rows: [],
  page: 0,
  order: []
};

export function orderReducer(state = initalState, action: action.CrudOrderActions) {
  switch (action.type) {
    case 'GET_ORDER':
      const newRows = action.payload.rows.map((element, index) => {
        return {
          ...element,
          customer: action.payload.rows[index].Customer?.name
        };
      });
      return {
        ...state,
        rows: newRows,
        count: action.payload.count,
        page: action.payload.page
      };

    case 'CREATE_ORDER':
      let updated = false;
      const newOrder = state.order.map((object) => {
        if (object.product === action.payload.product) {
          updated = true;
          return {
            ...object,
            quantity: parseInt(object.quantity) + parseInt(action.payload.quantity),
            total: (parseInt(object.quantity) + parseInt(action.payload.quantity)) * object.price
          };
        }
        return object;
      });

      if (updated) {
        return {
          ...state,
          order: newOrder
        };
      }
      state = {
        ...state,
        order: state.order.concat({
          ...action.payload,
          total: action.payload.price * parseInt(action.payload.quantity),
          id: action.payload.product
        })
      };

      return state;
    case 'UPDATE_ORDER':
      const newArray = state.order.map((object) => {
        if (object.id == action.payload.id) {
          return {
            ...object,
            quantity: action.payload.value,
            total: parseInt(action.payload.value) * object.price
          };
        }
        return object;
      });
      return {
        ...state,
        order: newArray
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
    .then((res) => dispatch(action.getOrderData({ ...res, page })));
}

export async function createNewData(dispatch: any, newData: DataOrder, page: number) {
  const filterValues = { columnField: '', id: 0, operatorValue: '', value: '' };
  const sort = [{ field: '', sort: '' }];
  await new EndpointRequest()
    .post('/order/several', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createOrderData(data)));

  fetchData(dispatch, page, sort, filterValues);
}

export async function editData(dispatch: any, newData: DataOrder) {
  new EndpointRequest()
    .put('/order', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.updateOrderData(data)));
}

export async function deleteData(dispatch: any, id: string, page: number) {
  const filterValues = { columnField: '', id: 0, operatorValue: '', value: '' };
  const sort = [{ field: '', sort: '' }];
  await new EndpointRequest()
    .delete('/order', id)
    .then((res) => res.json())
    .then(() => dispatch(action.deleteOrderData(id)));
  fetchData(dispatch, page, sort, filterValues);
}
