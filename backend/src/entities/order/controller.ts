import { getModel } from '../../db/models';
import ProductController from '../product/controller';

export default class OrderController extends ProductController {
  model: any;

  async getOrderService(request: any) {
    const Customer = await getModel('Customer');
    let include = {
      include: {
        model: Customer,
        attributes: ['name']
      }
    };
    return super.getProductService(request, include);
  }
}
