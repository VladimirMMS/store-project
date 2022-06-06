import { CrudProductActions } from '../actions/actions';
import { DataProduct, SortType, State } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

const initalState: State = {
  count: 0,
  rows: []
};

export function productReducer(state = initalState, action: CrudProductActions) {
  switch (action.type) {
    case 'GET_PRODUCT':
      const newRows = action.payload.rows.map((element, index) => {
        return {
          ...element,
          category: action.payload.rows[index].Category?.name
        };
      });

      return {
        ...state,
        rows: newRows,
        count: action.payload.count
      };

    case 'CREATE_PRODUCT':
      if (state.rows.length < 10) {
        return {
          ...state,
          rows: state.rows.concat(action.payload),
          count: state.count + 1
        };
      }
      return {
        ...state,
        rows: state.rows,
        count: state.count + 1
      };
    case 'UPDATE_PRODUCT':
      const newArray = state.rows.map((object) => {
        if (object.id == action.payload.data.id) {
          return {
            ...object,
            name: action.payload.data.name,
            price: action.payload.data.price,
            categoryId: action.payload.data.categoryId
          };
        }
        return object;
      });

      return {
        ...state,
        rows: newArray
      };
    case 'DELETE_PRODUCT':
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
      `/product?page=${page}&pageSize=${10}&field=${field}&sort=${sort}&filter=${JSON.stringify(
        filterValues
      )}`
    )
    .then((respon) => respon.json())
    .then((res) => dispatch(action.getProductData(res)));
}

export async function createNewData(dispatch: any, newData: DataProduct) {
  new EndpointRequest()
    .post('/product', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createProductData(data)));
}

export async function editData(dispatch: any, newData: DataProduct) {
  new EndpointRequest()
    .put('/product', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.updateProductData(data)))
    .catch((e) => {
      return e;
    });
}

export async function deleteData(dispatch: any, id: string) {
  new EndpointRequest()
    .delete('/product', id)
    .then((res) => res.json())
    .then(() => dispatch(action.deleteProductData(id)));
}
