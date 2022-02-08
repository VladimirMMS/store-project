import { FastifyInstance } from 'fastify';

export async function registerRoute(fastify: FastifyInstance, option: any, done: any) {
  const { route } = option;
  route.default.createRoute(fastify, option, done);
  route.product.productRoute(fastify, option, done);

  done();
}
