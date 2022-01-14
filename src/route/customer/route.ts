import { FastifyInstance } from 'fastify';
import {
  getAllCustomer,
  getAllCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomerById
} from './controller';
import getModels from '../../db/models';

export default (fastify: FastifyInstance, opt: any, done: any) => {
  const db = getModels();
  const { Product } = db;
  fastify.get('/customer', getAllCustomer);
  fastify.get('/customer/:id', getAllCustomerById);
  fastify.post('/customer', createCustomer);
  fastify.put('/customer/:id', updateCustomer);
  fastify.delete('/customer/:id', deleteCustomerById);
  done();
};
