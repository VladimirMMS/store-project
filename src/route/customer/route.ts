import getAllCustomer from './controllers/getCustomer'
import getAllCustomerById from './controllers/getCustomerById';
import createCustomer from './controllers/createCustomer';
import { updateCustomer } from './controllers/updateCustomer';
import { deleteCustomerById } from './controllers/deleteCustomer';

const option = {
  schema: {
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
}

function customerRoute(fastify:any, opt:any, done:any) {

  fastify.get('/customer', getAllCustomer);
  fastify.get('/customer/:id',getAllCustomerById);
  fastify.post('/customer', option, createCustomer);
  fastify.put('/customer/:id', updateCustomer);
  fastify.delete('/customer/:id', deleteCustomerById);
  done();
  
}

export default customerRoute;

