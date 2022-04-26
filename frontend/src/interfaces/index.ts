import { GridColumns } from "@mui/x-data-grid";

type JSXComponent = () => JSX.Element;

export interface RouteInterface {
  path: string;
  component: JSXComponent;
  name: string;
  children?: RouteInterface[];
}

export interface DataCustomer {
  name: string;
  lastname: string;
  age: number;
  phone: string;
}

export interface PropsTable {
  data: DataCustomer[];
  columns: GridColumns<DataCustomer>;
  title: string;
}

export interface Data {
  data: DataCustomer[];
  row: DataCustomer
}