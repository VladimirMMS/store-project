import glob from 'fast-glob';
import { FastifyInstance } from 'fastify';

export async function verifyRoute(fastify: FastifyInstance, opt: any, done: any) {
  const routePrefix = opt.prefix.split('/')[2];
  let customerDirectory = glob.sync([`**src/route/${routePrefix}/route.ts`], {
    onlyFiles: true,
    absolute: true
  });
  if (!customerDirectory.length) {
    customerDirectory = glob.sync(['**src/route/route.ts'], {
      onlyFiles: true,
      absolute: true
    });
  }
  customerDirectory.map(async (file: any) => {
    const { default: route } = await import(file);
    fastify.register(route.createRoute, {
      prefix: opt.prefix,
      controller: opt.controller
    });
  });
  done();
}
