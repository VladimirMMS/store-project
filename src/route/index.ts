import { FastifyInstance } from 'fastify';
import getModels from '../db/models';
import { DefaultController } from './controller';
import { ProductController } from './product/controller';
import ProductRoute from './product/route';
import { verifyRoute } from '../utils/verifyRoute';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  const db = await getModels();
  const { Product, Customer } = await db;
  fastify.register(ProductRoute.createRoute, {
    prefix: '/store/product',
    controller: new ProductController(Product)
  });
  fastify.register(verifyRoute, {
    prefix: '/store/customer',
    controller: new DefaultController(Customer)
  });
  done();
};
