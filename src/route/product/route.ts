import { FastifyInstance } from 'fastify';
import { CreateCrud } from '../controller';
import getModels from '../../db/models';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  const db = await getModels();
  const { Product } = await db;
  const product = new CreateCrud(Product);
  fastify.get('/product', () => product.getAllService());
  fastify.get('/product/:id', (request) => product.getAllServiceById(request));
  fastify.post('/product', (request) => product.createService(request));
  fastify.put('/product/:id', (request) => product.updateService(request));
  fastify.delete('/product/:id', (request) => product.deleteServiceById(request));
  done();
};
