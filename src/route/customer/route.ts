import { FastifyInstance } from 'fastify';
import { CreateCrud } from '../controller';
import getModels from '../../db/models';

export default (fastify: FastifyInstance, opt: any, done: any) => {
  const db = getModels();
  const { Customer } = db;
  console.log(Customer);
  const customer = new CreateCrud(Customer);
  fastify.get('/customer', () => customer.getAllService());
  fastify.get('/customer/:id', (request) => customer.getAllServiceById(request));
  fastify.post('/customer', (request) => customer.createService(request));
  fastify.put('/customer/:id', (request) => customer.updateService(request));
  fastify.delete('/customer/:id', (request) => customer.deleteServiceById(request));
  done();
};
