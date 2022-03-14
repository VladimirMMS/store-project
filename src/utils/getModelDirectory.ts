import { getModels } from '../db/models';

function lowerCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

async function getModelDirectory() {
  let modelArray: string[] = [];
  const models = await getModels();
  Object.keys(models).forEach((model) => {
    modelArray.push(lowerCase(model));
  });
  return modelArray;
}

export default getModelDirectory;
