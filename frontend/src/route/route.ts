import { RouteInterface } from '../interfaces';
import { Product, Customer, Category, Order } from '../pages';

export const routes: RouteInterface[] = [
  {
    path: '/admin/customer',
    component: Customer,
    name: 'Customer'
  },
  {
    path: '/admin/product',
    component: Product,
    name: 'Product'
  },
  {
    path: '/admin/order',
    component: Order,
    name: 'Order'
  },
  {
    path: '/admin/Category',
    component: Category,
    name: 'Category'
  }
];
