import { FastifyInstance } from 'fastify';
import {
  getAllCustomer,
  getAllCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomerById
} from './controller';

const option = {
  schema: {
    querystring: {
      customer: { type: 'string' },
      excitement: { type: 'string' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          data: { type: 'object' }
        }
      }
    }
  }
};

export default (fastify: FastifyInstance, opt: any, done: any) => {
  fastify.get('/customer', option, getAllCustomer);
  fastify.get('/customer/:id', option, getAllCustomerById);
  fastify.post('/customer', option, createCustomer);
  fastify.put('/customer/:id', updateCustomer);
  fastify.delete('/customer/:id', deleteCustomerById);
  done();
};
