import DefaultController from '../controller';

export default class ProductController extends DefaultController {
  model: any;

  async getProductByCategory(request: any) {
    return this.model.findAll({
      where: { name: request.params.category }
    });
  }
}
