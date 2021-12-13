import getAllProduct from './controllers/getProducts'
import fb from "fastify-plugin"



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

