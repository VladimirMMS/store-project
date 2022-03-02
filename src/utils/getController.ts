import getModels from '../db/models';
import path from 'path';

export async function getController(modelName: string, finalPath: string) {
  const db = await getModels();
  const { Customer, Product } = await db;
  const modelObject: any = {
    customer: Customer,
    product: Product
  };
  finalPath = finalPath.replace('route.ts', 'controller.ts');
  const { default: controller } = await import(path.resolve(finalPath));
  return new controller(modelObject[modelName]);
}
