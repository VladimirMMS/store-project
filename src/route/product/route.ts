import { DefaultRoute } from '../route';

export class ProductRoute extends DefaultRoute {
  static createRoute(fastify: any, option: any, done: any) {
    fastify.get('/category/:category', (request: any) =>
      option.controller.getProductByCategory(request)
    );
    super.createRoute(fastify, option, done);
  }
}
