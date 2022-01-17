import { FastifyInstance } from 'fastify';
import productRoute from './product/route';
import customerRoute from './customer/route';

export default (fastify: FastifyInstance, opt: any, done: any) => {
  fastify.register(productRoute, {
    prefix: '/store'
  });
  fastify.register(customerRoute, {
    prefix: '/store'
  });
  done();
};
