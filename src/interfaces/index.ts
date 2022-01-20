export interface CustomerAttribute {
  id: string;
  name: string;
  lastname: string;
  age: number;
}

export interface ProductAttribute {
  id: number;
  name: string;
  price: number;
}

export interface OptionAttribute {
  prefix: string;
  model: any;
}
