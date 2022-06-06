import { Op } from 'sequelize/dist';

export async function getManagement(req: any, currentModel: any, assoModel: any) {
  let orderQuery: any = [];
  let condition = {};
  const operator: any = {
    equals: Op.eq,
    contains: Op.substring,
    startsWith: Op.startsWith,
    endsWith: Op.endsWith,
    isAnyOf: Op.not
  };
  const { page, pageSize, field, sort, filter } = req;
  const filterObject = JSON.parse(filter);
  const { value, columnField, operatorValue } = filterObject;

  if (value && columnField && operatorValue) {
    condition = {
      where: {
        [columnField]: {
          [operator[operatorValue]]: value
        }
      }
    };
  }

  if (field !== '' && sort !== '') {
    orderQuery.push([field, sort]);
  }
  return currentModel.findAndCountAll({
    order: orderQuery,
    offset: page * pageSize,
    limit: pageSize,
    ...condition,
    ...assoModel
  });
}
