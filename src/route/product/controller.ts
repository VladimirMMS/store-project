import getModels from '../../db/models/index';
import { ProductAttribute } from '../../interfaces';

export default class ProductCrud {
  constructor(private serviceModel: ProductAttribute) {}

  async createProduct(request: any) {
    const db = await getModels();
    const { Product } = db;

    try {
      const newProduct = await Product.create(request.body);
      return newProduct;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getAllProduct() {
    const db = await getModels();
    const { Product } = db;
    try {
      const product = await Product.findAll();
      return product;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getAllProductById(request: any) {
    const db = await getModels();
    const { Product } = db;

    try {
      const product = await Product.findOne({
        where: parseInt(request.params.id)
      });
      return product;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async updateProduct(request: any) {
    const db = await getModels();
    const { Product } = db;

    try {
      const updatedProduct = await Product.update(request.body, {
        where: { id: request.params.id }
      });

      return updatedProduct;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async deleteProducttById(request: any) {
    const db = await getModels();
    const { Product } = db;
    try {
      const product = await Product.destroy({
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
