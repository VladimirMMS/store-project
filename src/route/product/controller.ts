export class ProductCrud {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async createProduct(request: any): Promise<object> {
    try {
      const newProduct = await this.model.create(request.body);
      return newProduct;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getAllProduct() {
    try {
      const product = await this.model.findAll();
      return product;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getAllProductById(request: any) {
    try {
      const product = await this.model.findOne({
        where: parseInt(request.params.id)
      });
      return product;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async updateProduct(request: any) {
    try {
      const updatedProduct = await this.model.update(request.body, {
        where: { id: request.params.id }
      });

      return updatedProduct;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async deleteProducttById(request: any) {
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
