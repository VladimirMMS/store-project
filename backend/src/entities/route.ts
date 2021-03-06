export default class DefaultRoute {
  static createRoute(fastify: any, option: any, done: () => void) {
    fastify.get('/', (request: any) => option.controller.getAllService(request.query));
    fastify.get('/:id', (request: any) => option.controller.getServiceById(request.params.id));
    fastify.post('/', (request: any) => option.controller.createService(request.body));
    fastify.put('/:id', (request: any) => option.controller.updateService(request));
    fastify.delete('/:id', (request: any) =>
      option.controller.deleteServiceById(request.params.id)
    );
    done();
  }
}
