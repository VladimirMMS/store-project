import { CarOrder, DataOrder, OrderState, SortType } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

const initalState: OrderState = {
  count: 0,
  rows: [],
  page: 0,
  order: {
    products: []
  }
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
      const newOrder = state.order.products?.map((object) => {
        if (object.name === action.payload.products[0].name) {
          updated = true;
          return {
            ...object,
            quantity: parseInt(object.quantity) + parseInt(action.payload.products[0].quantity),
            total:
              (parseInt(object.quantity) + parseInt(action.payload.products[0].quantity)) * parseInt(object.price) 
          };
        }
        return object;
      });

      if (updated) {
        return {
          ...state,
          order: {
            customer: action.payload.customer,
            address: action.payload.address,
            ...state.order,
            products: newOrder
          }
        };
      }
      state = {
        ...state,
        order: {
          ...state.order,
          customer: action.payload.customer,
          address: action.payload.address,
          products: state.order.products.concat({
            ...state.order.products,
            ...action.payload,
            id: action.payload.products[0].name,
            name: action.payload.products[0].name,
            quantity: action.payload.products[0].quantity,
            total: action.payload.products[0].quantity * parseInt(action.payload.products[0].price),
            price: action.payload.products[0].price
          })
        }
      };

      return state;
    case 'UPDATE_ORDER':
      const newArray = state.order.products?.map((object) => {
        if (object.id == action.payload.id) {
          return {
            ...object,
            quantity: action.payload.value,
            total: parseInt(action.payload.value) * parseInt(object.price)
          };
        }
        return object;
      });
      return {
        ...state,
        order: {
          ...state.order,
          products: newArray
        }
      };

    case 'SEND_ORDER':
      return state;

    case 'DELETE_ORDER':
      const arrayD = state.order.products?.filter((element) => {
        return element.id !== action.payload.id;
      });
      return {
        ...state,
        order: arrayD
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
    .then((res) => dispatch(action.getOrderData({ ...res, page })));
}

export async function createNewData(dispatch: any, newData: CarOrder, page: number) {
  const filterValues = { columnField: '', id: 0, operatorValue: '', value: '' };
  const sort = [{ field: '', sort: '' }];
  await new EndpointRequest()
    .post('/order', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.sendOrderData(data)));

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
