import DefaultRoute from '../route';

export default class ProductRoute extends DefaultRoute {
  static createRoute(fastify: any, option: any, done: any) {
    fastify.get('/', (request: any) => option.controller.getCategoryService(request));
    super.createRoute(fastify, option, done);
  }
}
