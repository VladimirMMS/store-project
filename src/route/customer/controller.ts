import getModels from '../../db/models/index';

export async function createCustomer(request: any) {
  const db = await getModels();
  const { Customer } = db;

  try {
    const newCsutomer = await Customer.create(request.body);
    return newCsutomer;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getAllCustomer() {
  const db = await getModels();
  const { Customer } = db;
  try {
    const customer = await Customer.findAll();
    return customer;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getAllCustomerById(request: any) {
  const db = await getModels();
  const { Customer } = db;

  try {
    const customer = await Customer.findOne({
      where: parseInt(request.params.id)
    });
    return customer;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateCustomer(request: any) {
  const db = await getModels();
  const { Customer } = db;

  try {
    const updatedCustomer = await Customer.update(request.body, {
      where: { id: request.params.id }
    });

    return updatedCustomer;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteCustomerById(request: any) {
  const db = await getModels();
  const { Customer } = db;
  try {
    const customer = await Customer.destroy({
      where: {
        id: request.params.id
      }
    });
    return customer;
  } catch (error: any) {
    return { error: error.message };
  }
}
