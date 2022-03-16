import fastify from 'fastify';
import dotenv from 'dotenv';
import serviceRoute from './entities/index';
import initDb, { getAssocation } from './db/models';

const server = fastify();
dotenv.config();
server.register(serviceRoute);

server.setErrorHandler((error, request, reply) => {
  reply.send(error);
});
server.get('/', async function () {
  return { root: true };
});

server.listen(5002, async (err, address) => {
  const db = initDb();
  getAssocation();
  db.sequelize.sync({ force: true }).then(() => {
    return;
  });
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export default server;
