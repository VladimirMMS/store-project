import { getModels } from '../../db/models';
import DefaultController from '../controller';

export default class OrderController extends DefaultController {
  model: any;

  include: any;

  async createService(body: any) {
    const { customer, address } = body;
    const { OrderItem, Product } = await getModels();
    const { dataValues: orderValue } = await this.model.create({
      address: address,
      customerId: customer
    });
    return Promise.all(
      body.products.map(async (product: any) => {
        const { dataValues: productValue } = await Product.findOne({
          where: { name: product.name }
        });
        return OrderItem.create({
          orderId: orderValue.id,
          prductId: productValue.id,
          quantity: product.quantity
        });
      })
    );
  }
}
