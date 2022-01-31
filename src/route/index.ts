import { FastifyInstance } from 'fastify';
import productRoute from './product/route';
import customerRoute from './customer/route';
import getModels from '../db/models';
import { DefaultController } from './controller';
import { ProductController } from './product/controller';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  const db = await getModels();
  const { Product, Customer } = await db;

  fastify.register(productRoute, {
    prefix: '/store/product',
    controller: new ProductController(Product)
  });
  fastify.register(customerRoute, {
    prefix: '/store/customer',
    controller: new DefaultController(Customer)
  });
  done();
};
