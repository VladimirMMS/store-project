import { getModel, getModels } from '../../db/models';
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
    return super.getAllDataService(request, include);
  }

  async createSeveralServie(body: any) {
    const { Customer, OrderItem, Product } = await getModels();
    const { dataValues: customerValue } = await Customer.findOne({
      where: { name: body.customer }
    });
    const { dataValues: productValue } = await Product.findOne({ where: { name: body.products } });
    const { dataValues: orderValue } = await this.model.create({
      address: body.address,
      customerId: customerValue.id
    });
    return OrderItem.create({
      orderId: orderValue.id,
      prductId: productValue.id,
      quantity: body.product.length
    });
  }
}
