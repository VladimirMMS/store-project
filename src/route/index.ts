import { FastifyInstance } from 'fastify';
import productRoute from './product/route';
import customerRoute from './customer/route';
import getModels from '../db/models';
import { OptionAttribute } from '../interfaces';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  const db = await getModels();
  const { Product, Customer } = await db;
  let option: OptionAttribute = {
    prefix: '/store',
    model: Product
  };

  fastify.register(productRoute, {
    ...option
  });
  fastify.register(customerRoute, {
    prefix: '/store',
    model: Customer
  });
  done();
};
