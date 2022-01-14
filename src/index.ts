import fastify from 'fastify';
import dotenv from 'dotenv';
import serviceRoute from './route/index';
import getModels from './db/models';

const server = fastify();
dotenv.config();
server.register(serviceRoute);

server.get('/', async function () {
  return { root: true };
});

server.listen(5000, async (err, address) => {
  const db = await getModels();
  db.sequelize.sync({ force: true }).then(() => {
    return '';
  });
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export default server;
