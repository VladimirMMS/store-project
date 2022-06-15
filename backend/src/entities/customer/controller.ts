import ProductController from '../product/controller';

export default class CustomerController extends ProductController {
  model: any;

  async getCustomerService(request: any) {
    const include = {};
    return super.getProductService(request, include);
  }
}
