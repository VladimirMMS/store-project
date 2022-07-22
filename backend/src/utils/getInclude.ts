import { getModels } from '../db/models';

export async function getInclude(modelName: string) {
  let include = {};
  const { Category, Customer } = await getModels();
  switch (modelName) {
    case 'product':
      include = {
        include: {
          model: Category,
          attributes: ['id', 'name']
        }
      };
      return include;
    case 'category':
      return include;
    case 'order':
      include = {
        include: {
          model: Customer,
          attributes: ['name']
        }
      };
      return include;
    case 'category':
      return include;

    case 'orderItem':
      return include;
  }
  return include;
}
