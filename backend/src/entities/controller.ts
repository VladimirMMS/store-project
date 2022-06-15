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

  async getAllService() {
    return this.model.findAll();
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
