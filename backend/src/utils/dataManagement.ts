import { getModels } from '../db/models';
import DefaultController from '../entities/controller';
import { entitiesManagement } from './getManagement';

export class DataManagement extends DefaultController {
  model: any;

  modelName: string;

  constructor(model: any, modelName: string) {
    super(model, modelName);
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
