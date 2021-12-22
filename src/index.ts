/* eslint-disable no-mixed-spaces-and-tabs */
import fastify, {FastifyPluginAsync} from 'fastify';
import dotenv from 'dotenv';
import serviceRoute from './route/service/route';
import db from './db/models';

const server = fastify();
dotenv.config();
server.register(serviceRoute);


const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.get('/', async function (request, reply) {
	  return { root: true };
	});
};

server.listen(5000, (err, address) => {
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

