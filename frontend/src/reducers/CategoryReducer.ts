import { CrudCategoryActions } from '../actions/actions';
import { CategoryState, DataCategory, SortType, State } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

const initalState: CategoryState = {
  count: 0,
  rows: [],
  page: 0
};

export function categoryReducer(state = initalState, action: CrudCategoryActions) {
  switch (action.type) {
    case 'GET_CATEGORY':
  
      state = {
        ...state,
        rows: action.payload.rows
      };
      return {
        ...state,
        rows: action.payload.rows,
        count: action.payload.count,
        page: action.payload.page
      };

    case 'CREATE_CATEGORY':
      return state;
    case 'UPDATE_CATEGORY':
      const newArray = state.rows.map((object) => {
        if (object.id == action.payload.data.id) {
          return {
            ...object,
            name: action.payload.data.name,
          };
        }
        return object;
      });

      return {
        ...state,
        rows: newArray
      };
    case 'DELETE_CATEGORY':
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
      `/category?page=${page}&pageSize=${10}&field=${field}&sort=${sort}&filter=${JSON.stringify(
        filterValues
      )}`
    )
    .then((respon) => respon.json())
    .then((res) => dispatch(action.getCategoryData({...res, page})));
}

export async function createNewData(dispatch: any, newData: DataCategory, page: number) {
  const filterValues = {columnField: '', id: 0, operatorValue: '', value: ''}
  const sort = [{field: '', sort: ''}]
  await new EndpointRequest()
    .post('/category', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createCategoryData(data)));
  
  fetchData(dispatch, page, sort, filterValues)

}

export async function editData(dispatch: any, newData: DataCategory) {
  new EndpointRequest()
    .put('/category', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.updateCategoryData(data)));
}

export async function deleteData(dispatch: any, id: string, page: number) {
  const filterValues = {columnField: '', id: 0, operatorValue: '', value: ''}
  const sort = [{field: '', sort: ''}]
  await new EndpointRequest()
    .delete('/category', id)
    .then((res) => res.json())
    .then(() => dispatch(action.deleteCategoryData(id)));
  
    fetchData(dispatch, page, sort, filterValues)
}