import { DefaultRoute } from '../route';

export class ProductRoute extends DefaultRoute {
  static productRoute(fastify: any, option: any, done: any) {
    fastify.get('/category/:category', (request: any) =>
      option.controller.getProductByCategory(request)
    );
    done();
    super.createRoute(fastify, option, done);
  }
}
