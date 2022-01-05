import { FastifyInstance } from 'fastify';
import customerRoute from './customer/route';
import productRoute from './product/route';

export default (fastify: FastifyInstance, opt: any, done: any) => {
  fastify.register(customerRoute, {
    prefix: '/store'
  });

  fastify.register(productRoute, {
    prefix: '/store'
  });
  done();
};
