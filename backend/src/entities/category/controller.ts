import ProductController from '../product/controller';

export default class CategoryController extends ProductController {
  model: any;

  async getCategoryService(request: any) {
    const include = {};
    return super.getProductService(request, include);
  }
}
