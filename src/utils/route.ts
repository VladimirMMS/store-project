import { FastifyInstance } from 'fastify';
import { CreateCrud } from '../route/controller';
import getModels from '../db/models';

export default (fastify: FastifyInstance, opt: any, done: any) => {
  const db = getModels();
  const { Customer } = db;
  const customer = new CreateCrud(Customer);
  fastify.get('/customer2', () => customer.getAllService());
  fastify.get('/customer2/:id', (request) => customer.getAllServiceById(request));
  fastify.post('/customer2', (request) => customer.createService(request));
  fastify.put('/customer2/:id', (request) => customer.updateService(request));
  fastify.delete('/customer2/:id', (request) => customer.deleteServiceById(request));
  done();
};
