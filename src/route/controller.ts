export class DefaultController {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async createService(request: any) {
    const newProduct = await this.model.create(request.body);
    return newProduct;
  }

  async getAllService() {
    const product = await this.model.findAll();
    return product;
  }

  async getAllServiceById(request: any) {
    const product = await this.model.findOne({
      where: parseInt(request.params.id)
    });
    return product;
  }

  async updateService(request: any) {
    const updatedProduct = await this.model.update(request.body, {
      where: { id: request.params.id }
    });

    return updatedProduct;
  }

  async deleteServiceById(request: any) {
    const product = await this.model.destroy({
      where: {
        id: request.params.id
      }
    });

    return product;
  }
}
