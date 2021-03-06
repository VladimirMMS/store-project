import { Op } from 'sequelize/dist';

export default class DefaultController {
  model: any;

  include: any;

  constructor(model: any, include: any) {
    this.model = model;
    this.include = include;
  }

  async createService(body: any): Promise<object> {
    return this.model.create(body);
  }

  async getAllService(req: any) {
    let orderQuery: any = [];
    let condition = {};
    const operator: any = {
      equals: Op.eq,
      contains: Op.substring,
      startsWith: Op.startsWith,
      endsWith: Op.endsWith,
      isAnyOf: Op.not
    };
    const { page, pageSize, field, sort, filter } = req;
    const filterObject = JSON.parse(filter);
    const { value, columnField, operatorValue } = filterObject;
    if (value && columnField && operatorValue) {
      condition = {
        where: {
          [columnField]: {
            [operator[operatorValue]]: value
          }
        }
      };
    }
    if (field !== '' && sort !== '') {
      orderQuery.push([field, sort]);
    }
    return this.model.findAndCountAll({
      order: orderQuery,
      offset: page * pageSize,
      limit: pageSize,
      ...condition,
      ...this.include
    });
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
