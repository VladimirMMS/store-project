export interface CustomerAttribute {
  id: string;
  name: string;
  lastname: string;
  age: number;
  phone: number;
}

export interface ProductAttribute {
  id: number;
  name: string;
  price: number;
}

export interface ProductOrderAttribute {
  id: number;
  orderId: string;
  productId: string;
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
  orderId: string;
  customerId: string;
  productId: string;
  address: string;
}
