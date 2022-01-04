import {
  getAllProduct,
  getAllProductById,
  createProduct,
  updateProduct,
  deleteProducttById
} from './controller';
import { FastifyInstance } from 'fastify';

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
  fastify.get('/product', option, getAllProduct);
  fastify.get('/product/:id', option, getAllProductById);
  fastify.post('/product', option, createProduct);
  fastify.put('/product/:id', updateProduct);
  fastify.delete('/product/:id', deleteProducttById);
  done();
};
