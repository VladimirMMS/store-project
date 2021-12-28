/* eslint-disable no-mixed-spaces-and-tabs */
import fastify, {FastifyPluginAsync} from 'fastify';
import dotenv from 'dotenv';
import customerRoute from './route/customer/route';
import productRoute from './route/product/route';
import getModels from './db/models';


const server = fastify();
dotenv.config();
server.register(customerRoute);
server.register(productRoute);


const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.get('/', async function (request, reply) {
	  return { root: true };
	});
};

server.listen(5000, async(err, address) => {
	const db = getModels();
	db.sequelize.sync({force:true}).then(() => {
		return '';
	});
	if(err) {
		console.log(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});

export default server;

