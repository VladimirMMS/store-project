export default class DefaultController {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async createService(body: any): Promise<object> {
    return this.model.create(body);
  }

  async getAllService(): Promise<object> {
    return this.model.findAll();
  }

  async getServiceById(id: any): Promise<object> {
    return this.model.findOne({
      where: { id: id }
    });
  }

  async updateService(request: any): Promise<object> {
    return this.model.update(request.body, {
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