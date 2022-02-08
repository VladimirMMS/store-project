import { FastifyInstance } from 'fastify';
import getModels from '../db/models';
import { DefaultController } from './controller';
import { ProductController } from './product/controller';
import { DefaultRoute } from './route';
import { ProductRoute } from './product/route';
import { registerRoute } from '../utils/registerRoute';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  const db = await getModels();
  const { Product, Customer } = await db;
  const defaultRoute = new DefaultRoute();
  fastify.register(registerRoute, {
    prefix: '/store/product',
    controller: new ProductController(Product),
    route: {
      default: new DefaultRoute(),
      product: new ProductRoute()
    }
  });
  fastify.register(defaultRoute.createRoute, {
    prefix: '/store/customer',
    controller: new DefaultController(Customer)
  });
  done();
};
