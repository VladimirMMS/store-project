
type JSXComponent = ({initialState}: any) => JSX.Element;

export interface RouteInterface {
  path: string;
  component: JSXComponent;
  name?: string;
  children?: RouteInterface[];
}

export interface DataCustomer {
  id?: string;
  name?: string;
  lastName?: string;
  date?: string;
  phone?: string;
}

export interface DataCategory {
  id?: string;
  name?: string;
}

export interface DataProduct {
  id?: string;
  name?: string;
  price?: number;
  categoryId?: string;
  Category?: DataCategory
}



export interface DataOrder {
  id?: string;
  customerId?: string;
  address?: string;
  Customer?: DataCustomer
}

export interface Row {
  row: DataCustomer,
  
}

export interface RowProduct {
  row: DataCustomer,
  
}
export interface RowCategory {
  row: DataCategory,
  
}
export interface RowOrder {
  row: DataOrder,
  
}

export interface DataGet {
  row: Array<DataCustomer>
  count: number 
}



export interface State {
  rows: Array<DataCustomer>
  count: number,
  page: number
  
}

export interface CategoryState {
  rows: Array<DataCategory>
  count: number,
  page: number
  
}

export interface ProductState {
  rows: Array<DataProduct>
  count: number,
  page: number
  
}
export interface CategoryState {
  rows: Array<DataCategory>
  count: number
  
}

export interface OrderState {
  rows: Array<DataOrder>
  count: number,
  page: number
  
}


export interface Data {
  data: DataCustomer[];
}

export interface SortType {
  field: string;
  sort: string;
} 

interface FilterItems {
  columnField: string;
  id: number;
  operatorValue: string;
  value: string
}

export interface Items {
  items: FilterItems
}