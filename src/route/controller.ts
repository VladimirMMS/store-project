export class CreateCrud {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async createService(request: any): Promise<object> {
    try {
      const newProduct = await this.model.create(request.body);
      return newProduct;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getAllService() {
    try {
      const product = await this.model.findAll();
      return product;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getAllServiceById(request: any) {
    try {
      const product = await this.model.findOne({
        where: parseInt(request.params.id)
      });
      return product;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async updateService(request: any) {
    try {
      const updatedProduct = await this.model.update(request.body, {
        where: { id: request.params.id }
      });

      return updatedProduct;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async deleteServiceById(request: any) {
    try {
      const product = await this.model.destroy({
        where: {
          id: request.params.id
        }
      });
      return product;
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
