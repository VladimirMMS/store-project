import DefaultRoute from '../route';

export default class CustomerRoute extends DefaultRoute {
  static createRoute(fastify: any, option: any, done: any) {
    fastify.get('/', (request: any) => option.controller.getOrderService(request));
    super.createRoute(fastify, option, done);
  }
}
