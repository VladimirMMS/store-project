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

export interface BodyAttribute {
  name: string;
  price: number;
}

export interface OrderAttribute {
  id: string;
  customerId: string;
  productId: string;
  address: string;
}
