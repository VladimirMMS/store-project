import { getModel } from '../../db/models';
import DefaultRoute from '../route';

export default class ProductRoute extends DefaultRoute {
  static async createRoute(fastify: any, option: any, done: any) {
    const Category = await getModel('Category');
    let include = {
      include: {
        model: Category,
        attributes: ['name']
      }
    };
    fastify.get('/category/:category', (request: any) =>
      option.controller.getProductByCategory(request)
    );
    fastify.get('/', (request: any) => option.controller.getProductService(request, include));
    super.createRoute(fastify, option, done);
    done();
  }
}
