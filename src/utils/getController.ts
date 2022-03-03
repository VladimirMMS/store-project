import getModels from '../db/models';
import path from 'path';

export async function getController(modelName: string, finalPath: string) {
  const modelUpper = modelName.charAt(0).toUpperCase() + modelName.slice(1);
  const db = await getModels();
  finalPath = finalPath.replace('route.ts', 'controller.ts');
  const { default: controller } = await import(path.resolve(finalPath));
  return new controller(db.sequelize.models[modelUpper]);
}
