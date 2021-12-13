import getAllProduct from './controllers/getProducts'
import fb from "fastify-plugin"
import fastify from "fastify";

const app = fastify()


export default fb(async(server:any, opts:any, next:any) => {
    server.route({
        method: 'GET',
        url: '/product',
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
        handler: getAllProduct
      })
})



