import { FastifyInstance } from 'fastify';
import path from 'path';
import { getController } from '../utils/getController';
import getModelDirectory from '../utils/getModelDirectory';
import fs from 'fs';

export default async (fastify: FastifyInstance) => {
  const modelArray = await getModelDirectory();
  modelArray.map(async (model) => {
    const modelName = model;
    let directory = '';
    if (fs.existsSync(`src/entities/${model}/route.ts`)) {
      directory = 'src/entities/' + model;
    } else {
      directory = 'src/entities/route.ts';
    }
    const { default: route } = await import(path.resolve(directory));
    fastify.register(route.createRoute, {
      prefix: `store/${modelName}`,
      controller: await getController(modelName)
    });
  });
};
