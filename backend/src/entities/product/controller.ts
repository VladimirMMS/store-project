import { entitiesManagement } from '../../utils/getManagement';
import DefaultController from '../controller';

export default class ProductController extends DefaultController {
  model: any;

  async getProductByCategory(request: any) {
    return this.model.findAll({
      where: { name: request.params.category }
    });
  }

  async getAllDataService(request: any, include: any) {
    return entitiesManagement(request.query, this.model, include);
  }
}
