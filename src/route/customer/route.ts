import { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  fastify.get('/', () => opt.controller.getAllService());
  fastify.get('//:id', (request) => opt.controller.getAllServiceById(request));
  fastify.post('/', (request) => opt.controller.createService(request));
  fastify.put('//:id', (request) => opt.controller.updateService(request));
  fastify.delete('//:id', (request) => opt.controller.deleteServiceById(request));
  done();
};
