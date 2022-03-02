export default class DefaultRoute {
  static createRoute(fastify: any, option: any, done: any) {
    fastify.get('/', () => option.controller.getAllService());
    fastify.get('/:id', (request: any) => option.controller.getAllServiceById(request));
    fastify.post('/', (request: any) => option.controller.createService(request));
    fastify.put('//:id', (request: any) => option.controller.updateService(request));
    fastify.delete('//:id', (request: any) => option.controller.deleteServiceById(request));
    done();
  }
}
