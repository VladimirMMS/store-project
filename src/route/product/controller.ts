import { DefaultController } from '../controller';

export class ProductController extends DefaultController {
  async getProductByCategory(request: any) {
    return this.model.findOne({
      where: request.params.id
    });
  }
}
