import getAllProduct from './controllers/getProducts'
import getAllProductById from './controllers/getProductById';
import createProduct from './controllers/createProduct';
import { updateProduct } from './controllers/updateProduct';

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

function productRoute(fastify:any, opt:any, done:any) {

  fastify.get('/product', getAllProduct);
  fastify.get('/product/:id', option, getAllProductById);
  fastify.post('/product', option, createProduct);
  fastify.put('/product', option, updateProduct);
  fastify.delete('/product', option, getAllProduct);
  done();
  
}

export default productRoute;

