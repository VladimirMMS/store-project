import { FastifyInstance } from 'fastify';
import glob from 'fast-glob';
import path from 'path';
import { getController } from '../utils/getController';
import fs from 'fs';

export default async (fastify: FastifyInstance, opt: any, done: any) => {
  glob
    .sync([`**src/route/**/**`, '!**src/*', '!**src/route/**/**.ts'], {
      onlyFiles: false,
      absolute: false
    })
    .forEach(async (finalPath) => {
      const modelName = finalPath.split('/')[2];
      const directory = fs.existsSync(finalPath + '/route.ts');
      if (directory) {
        finalPath = finalPath + '/route.ts';
      } else {
        finalPath = finalPath.replace(modelName, 'route.ts');
      }
      const { default: route } = await import(path.resolve(finalPath));
      console.log(route);
      fastify.register(route.createRoute, {
        prefix: `store/${modelName}`,
        controller: await getController(modelName, finalPath)
      });
      done();
    });
};
