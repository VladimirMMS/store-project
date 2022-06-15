import { CrudCustomerActions } from '../actions/actions';
import { DataCustomer, SortType, State } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';
import { getAge } from '../utils/getAge';

const initalState: State = {
  count: 0,
  rows: [],
  page: 0
};

export function customerReducer(state = initalState, action: CrudCustomerActions) {
  switch (action.type) {
    case 'GET_CUSTOMERS':
      const  formatAge = action.payload.rows.map((element, index) => {
        const eachAge = action.payload.rows[index].date;
        return {
          ...element,
          date: getAge(eachAge ? eachAge : '')
        };
      });
      return {
        ...state,
        rows: formatAge,
        count: action.payload.count,
        page: action.payload.page
      };

    case 'CREATE_CUSTOMER':
      return state;
    case 'UPDATE_CUSTOMER':
      const newArray = state.rows.map((object) => {
        if (object.id == action.payload.data.id) {
          return {
            ...object,
            name: action.payload.data.name,
            lastName: action.payload.data.lastName,
            date: action.payload.data.date,
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
      return state;
    default:
      return {
        ...state
      };
  }
}

export async function customerFetchData(
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
    .then((res) => dispatch(action.getData({...res, page})));
}

export async function createNewData(dispatch: any, newData: DataCustomer, page: number) {
  const filterValues = {columnField: '', id: 0, operatorValue: '', value: ''}
  const sort = [{field: '', sort: ''}]
  await new EndpointRequest()
    .post('/customer', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.createData(data)));

    customerFetchData(dispatch, page, sort, filterValues)
  
}

export async function editData(dispatch: any, newData: DataCustomer) {
  new EndpointRequest()
    .put('/customer', newData)
    .then((res) => res.json())
    .then((data) => dispatch(action.updateData(data)));
}

export async function deleteData(dispatch: any, id: string, page: number) {
  const filterValues = {columnField: '', id: 0, operatorValue: '', value: ''}
  const sort = [{field: '', sort: ''}]
  await new EndpointRequest()
    .delete('/customer', id)
    .then((res) => res.json())
    .then(() => dispatch(action.deleteData(id)));
  
    customerFetchData(dispatch, page, sort, filterValues)
}
