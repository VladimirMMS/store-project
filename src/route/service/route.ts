/* eslint-disable @typescript-eslint/no-explicit-any */
import {getAllCustomer, 
	getAllCustomerById, 
	createCustomer, 
	updateCustomer, 
	deleteCustomerById, 
	getAllProduct, 
	getAllProductById, 
	createProduct, 
	updateProduct, 
	deleteProducttById} 
	from './controller/allController';


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
	},
};
  
function customerRoute(fastify:any, opt:any, done:any) {
	fastify.get('/customer', option.schema.response,getAllCustomer);
	fastify.get('/customer/:id',option.schema.response,getAllCustomerById);
	fastify.post('/customer', option.schema.querystring.customer,createCustomer);
	fastify.put('/customer/:id', updateCustomer);
	fastify.delete('/customer/:id', deleteCustomerById);
	fastify.get('/product', option.schema.response,getAllProduct);
	fastify.get('/product/:id',option.schema.response,getAllProductById);
	fastify.post('/product', option.schema.querystring.customer, createProduct);
	fastify.put('/product/:id', updateProduct);
	fastify.delete('/product/:id', deleteProducttById);
	done();
    
}
  
export default customerRoute;
  