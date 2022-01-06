import {
  getAllProduct,
  getAllProductById,
  createProduct,
  updateProduct,
  deleteProducttById
} from './controller';
import { FastifyInstance } from 'fastify';

export default (fastify: FastifyInstance, opt: any, done: any) => {
  fastify.get('/product', getAllProduct);
  fastify.get('/product/:id', getAllProductById);
  fastify.post('/product', createProduct);
  fastify.put('/product/:id', updateProduct);
  fastify.delete('/product/:id', deleteProducttById);
  done();
};
