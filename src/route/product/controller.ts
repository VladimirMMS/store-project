import getModels from '../../db/models/index';

export async function createProduct(request: any) {
  const db = await getModels();
  const { Product } = db;

  try {
    const newProduct = await Product.create(request.body);
    return newProduct;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getAllProduct() {
  const db = await getModels();
  const { Product } = db;
  try {
    const product = await Product.findAll();
    return product;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getAllProductById(request: any) {
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

export async function updateProduct(request: any) {
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

export async function deleteProducttById(request: any) {
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
