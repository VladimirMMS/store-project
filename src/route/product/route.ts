import { FastifyInstance } from 'fastify';
import { ProductCrud } from './controller';
import getModels from '../../db/models';

export default (fastify: FastifyInstance, opt: any, done: any) => {
  const db = getModels();
  const { Product } = db;
  const product = new ProductCrud(Product);
  fastify.get('/product', () => product.getAllProduct());
  fastify.get('/product/:id', (request) => product.getAllProductById(request));
  fastify.post('/product', (request) => product.createProduct(request));
  fastify.put('/product/:id', (request) => product.updateProduct(request));
  fastify.delete('/product/:id', (request) => product.deleteProducttById(request));
  done();
};
