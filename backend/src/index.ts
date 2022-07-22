import fastify from 'fastify';
import dotenv from 'dotenv';
import serviceRoute from './entities/index';
import initDb from './db/models';

const server = fastify();
dotenv.config();
server.register(serviceRoute);
server.register(import('fastify-cors'));

server.setErrorHandler((error, request, reply) => {
  reply.send(error);
});
server.get('/', async function () {
  return { root: true };
});

server.listen(5003, async (err, address) => {
  const db = await initDb();
  db.sequelize.sync({ force: false }).then(() => {
    return;
  });
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export default server;
