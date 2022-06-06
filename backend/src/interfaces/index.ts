export interface CustomerAttribute {
  id: string;
  name: string;
  lastName: string;
  age: number;
  phone: number;
}

export interface ProductAttribute {
  id: number;
  name: string;
  price: number;
  categoryId: number;
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
  id: string;
  customerId: string;
  address: string;
}

export interface CategoryAttribute {
  id: number;
  name: string;
}

export interface Operator {
  contains: string;
  equals: string;
  startsWith: string;
  endsWith: string;
}

export interface OrderItemAttribute {
  id: number;
  orderId: string;
  productId: string;
  quantity: number;
}
