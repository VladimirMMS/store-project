import path from 'path';
import { getModel } from '../db/models';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getController(modelName: string, controllerPath: string) {
  const model = await getModel(capitalize(modelName));
  const { default: controller } = await import(path.resolve(controllerPath));
  return new controller(model);
}
