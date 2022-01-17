import { FastifyInstance } from 'fastify';
import { DefaultController } from '../controller';
import getModels from '../../db/models';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  const db = await getModels();
  const { Customer } = await db;
  const customer = new DefaultController(Customer);
  fastify.get('/customer', () => customer.getAllService());
  fastify.get('/customer/:id', (request) => customer.getAllServiceById(request));
  fastify.post('/customer', (request) => customer.createService(request));
  fastify.put('/customer/:id', (request) => customer.updateService(request));
  fastify.delete('/customer/:id', (request) => customer.deleteServiceById(request));
  done();
};
