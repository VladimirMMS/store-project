import { FastifyInstance } from 'fastify';
import { DefaultController } from '../controller';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  const customer = new DefaultController(opt.model);
  fastify.get('/customer', () => customer.getAllService());
  fastify.get('/customer/:id', (request) => customer.getAllServiceById(request));
  fastify.post('/customer', (request) => customer.createService(request));
  fastify.put('/customer/:id', (request) => customer.updateService(request));
  fastify.delete('/customer/:id', (request) => customer.deleteServiceById(request));
  done();
};
