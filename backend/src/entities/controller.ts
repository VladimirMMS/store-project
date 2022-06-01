import { getModels } from '../db/models';
import { getManagement } from '../utils/getManagement';

export default class DefaultController {
  model: any;

  modelName: string;

  constructor(model: any, modelName: string) {
    this.model = model;
    this.modelName = modelName;
  }

  async createService(body: any): Promise<object> {
    return this.model.create(body);
  }

  async getAllService(request: any) {
    let inc = {};
    const { Category, Customer } = await getModels();
    switch (this.modelName) {
      case 'Product':
        inc = {
          include: {
            model: Category,
            attributes: ['name']
          }
        };
        return getManagement(request.query, this.model, inc);
      case 'Customer':
        return getManagement(request.query, this.model, inc);
      case 'Order':
        inc = {
          include: {
            model: Customer,
            attributes: ['name']
          }
        };
        return getManagement(request.query, this.model, inc);
      case 'Category':
        return getManagement(request.query, this.model, inc);
      default:
        break;
    }
  }

  async getServiceById(id: any): Promise<object> {
    return this.model.findOne({
      where: { id: id }
    });
  }

  async updateService(request: any): Promise<object> {
    await this.model.update(request.body, {
      where: { id: request.params.id }
    });

    return this.model.findOne({
      where: { id: request.params.id }
    });
  }

  async deleteServiceById(id: any): Promise<object> {
    return this.model.destroy({
      where: {
        id: id
      }
    });
  }
}
