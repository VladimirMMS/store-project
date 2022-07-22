import { getModels } from '../db/models';

export async function getInclude(modelName: string) {
  const { Category, Customer } = await getModels();
  let include: any = {
    product: {
      include: {
        model: Category,
        attributes: ['id', 'name']
      }
    },
    category: {},
    order: {
      include: {
        model: Customer,
        attributes: ['name']
      }
    },
    customer: {},
    orderItem: {}
  };
  return include[modelName];
}
