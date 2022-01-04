/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAllProduct,
  getAllProductById,
  createProduct,
  updateProduct,
  deleteProducttById
} from './controller';

const option = {
  schema: {
    querystring: {
      customer: { type: 'string' },
      excitement: { type: 'string' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          data: { type: 'object' }
        }
      }
    }
  }
};

function productRoute(fastify: any, opt: any, done: any) {
  fastify.get('/product', option.schema.response, getAllProduct);
  fastify.get('/product/:id', option.schema.response, getAllProductById);
  fastify.post('/product', option.schema.querystring.customer, createProduct);
  fastify.put('/product/:id', updateProduct);
  fastify.delete('/product/:id', deleteProducttById);
  done();
}

export default productRoute;
