import { RouteInterface } from '../interfaces';
import OrderRouter from '../orderRouter/orderRouter';
import { Product, Customer, Category } from '../pages';

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
    path: '/admin/order/*',
    component: OrderRouter,
    name: 'Order'
  },
  {
    path: '/admin/category',
    component: Category,
    name: 'Category'
  },
];
