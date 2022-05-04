import { DataCustomer } from '../interfaces';
import { useDispatch } from 'react-redux';

export type CrudActions =
  | { type: 'GET_CUSTOMERS'; payload: { data: object } }
  | { type: 'CREATE_CUSTOMER'; payload: object }
  | { type: 'PUT'; payload: { state: object } }
  | { type: 'DEL'; payload: { id: string } };

export const getData = (data: DataCustomer): CrudActions => ({
  type: 'GET_CUSTOMERS',
  payload: {
    data: data
  }
});

export const createData = (data: object): CrudActions => ({
  type: 'CREATE_CUSTOMER',
  payload: data
});
