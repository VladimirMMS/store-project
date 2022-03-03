export default class DefaultController {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async createService(body: object): Promise<object> {
    const newProduct = await this.model.create(body);
    return newProduct;
  }

  async getAllService(): Promise<object> {
    const product = await this.model.findAll();
    return product;
  }

  async getServiceById(id: string): Promise<object> {
    const product = await this.model.findOne({
      where: parseInt(id)
    });
    return product;
  }

  async updateService(request: any): Promise<object> {
    const updatedProduct = await this.model.update(request.body, {
      where: { id: request.params.id }
    });
    return updatedProduct;
  }

  async deleteServiceById(id: string): Promise<object> {
    const product = await this.model.destroy({
      where: {
        id: id
      }
    });
    return product;
  }
}
