/* eslint-disable @typescript-eslint/no-explicit-any */
import {getAllCustomer, 
	getAllCustomerById, 
	createCustomer, 
	updateCustomer, 
	deleteCustomerById} 
	from './controller/customerController';


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
	done();
    
}
  
export default customerRoute;