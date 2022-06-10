import {
  DataCustomer,
  DataProduct,
  ProductState,
  State,
  OrderState,
  DataCategory,
  DataOrder,
  CategoryState
} from '../interfaces';

export type CrudCustomerActions =
  | { type: 'GET_CUSTOMERS'; payload: State }
  | { type: 'CREATE_CUSTOMER'; payload: DataCustomer }
  | { type: 'UPDATE_CUSTOMER'; payload: { data: DataCustomer } }
  | { type: 'DELETE_CUSTOMER'; payload: string };

export type CrudProductActions =
  | { type: 'GET_PRODUCT'; payload: ProductState }
  | { type: 'CREATE_PRODUCT'; payload: DataProduct }
  | { type: 'UPDATE_PRODUCT'; payload: { data: DataProduct } }
  | { type: 'DELETE_PRODUCT'; payload: string };

export type CrudCategoryActions =
  | { type: 'GET_CATEGORY'; payload: CategoryState }
  | { type: 'CREATE_CATEGORY'; payload: DataCategory }
  | { type: 'UPDATE_CATEGORY'; payload: { data: DataCategory } }
  | { type: 'DELETE_CATEGORY'; payload: string };

export type CrudOrderActions =
  | { type: 'GET_ORDER'; payload: OrderState }
  | { type: 'CREATE_ORDER'; payload: DataOrder }
  | { type: 'UPDATE_ORDER'; payload: { data: DataOrder } }
  | { type: 'DELETE_ORDER'; payload: string };

export const getData = (data: State): CrudCustomerActions => ({
  type: 'GET_CUSTOMERS',
  payload: {
    rows: data.rows,
    count: data.count,
    page: data.page
  }
});

export const createData = (data: DataCustomer): CrudCustomerActions => ({
  type: 'CREATE_CUSTOMER',
  payload: data
});

export const updateData = (data: DataCustomer): CrudCustomerActions => ({
  type: 'UPDATE_CUSTOMER',
  payload: { data }
});

export const deleteData = (id: string): CrudCustomerActions => ({
  type: 'DELETE_CUSTOMER',
  payload: id
});

export const getProductData = (data: ProductState): CrudProductActions => ({
  type: 'GET_PRODUCT',
  payload: {
    rows: data.rows,
    count: data.count,
    page: data.page
  }
});

export const createProductData = (data: DataProduct): CrudProductActions => ({
  type: 'CREATE_PRODUCT',
  payload: data
});

export const updateProductData = (data: object): CrudProductActions => ({
  type: 'UPDATE_PRODUCT',
  payload: { data }
});

export const deleteProductData = (id: string): CrudProductActions => ({
  type: 'DELETE_PRODUCT',
  payload: id
});

export const getCategoryData = (data: ProductState): CrudCategoryActions => ({
  type: 'GET_CATEGORY',
  payload: {
    rows: data.rows,
    count: data.count,
    page: data.page
  }
});

export const createCategoryData = (data: DataProduct): CrudCategoryActions => ({
  type: 'CREATE_CATEGORY',
  payload: data
});

export const updateCategoryData = (data: object): CrudCategoryActions => ({
  type: 'UPDATE_CATEGORY',
  payload: { data }
});

export const deleteCategoryData = (id: string): CrudCategoryActions => ({
  type: 'DELETE_CATEGORY',
  payload: id
});

export const getOrderData = (data: OrderState): CrudOrderActions => ({
  type: 'GET_ORDER',
  payload: {
    rows: data.rows,
    count: data.count,
    page: data.page
  }
});

export const createOrderData = (data: DataProduct): CrudOrderActions => ({
  type: 'CREATE_ORDER',
  payload: data
});

export const updateOrderData = (data: object): CrudOrderActions => ({
  type: 'UPDATE_ORDER',
  payload: { data }
});

export const deleteOrderData = (id: string): CrudOrderActions => ({
  type: 'DELETE_ORDER',
  payload: id
});
