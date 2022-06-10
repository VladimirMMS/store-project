import { getModels } from '../db/models';
import { entitiesManagement } from './getManagement';

export class DataManagement {
  model: any;

  modelName: string;

  constructor(model: any, modelName: string) {
    this.model = model;
    this.modelName = modelName;
  }

  async getLogic(req: any) {
    let include = {};
    const { Category, Customer } = await getModels();
    switch (this.modelName) {
      case 'Product':
        include = {
          include: {
            model: Category,
            attributes: ['name']
          }
        };
        return entitiesManagement(req.query, this.model, include);
      case 'Customer':
        return entitiesManagement(req.query, this.model, include);
      case 'Order':
        include = {
          include: {
            model: Customer,
            attributes: ['name']
          }
        };
        return entitiesManagement(req.query, this.model, include);
      case 'Category':
        return entitiesManagement(req.query, this.model, include);
      default:
        break;
    }
  }
}
