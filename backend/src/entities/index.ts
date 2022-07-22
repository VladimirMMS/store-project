import { FastifyInstance } from 'fastify';
import path from 'path';
import { getController } from '../utils/getController';
import getModelDirectory from '../utils/getModelDirectory';
import fs from 'fs';

export default async (fastify: FastifyInstance) => {
  const modelArray = await getModelDirectory();
  modelArray.map(async (model) => {
    let directory = 'src/entities/controller.ts';
    if (fs.existsSync(`src/entities/${model}/controller.ts`)) {
      directory = `src/entities/${model}/controller.ts`;
    }
    const controller = await getController(model, directory);
    directory = 'src/entities/route.ts';
    if (fs.existsSync(`src/entities/${model}/route.ts`)) {
      directory = `src/entities/${model}/route.ts`;
    }

    const { default: route } = await import(path.resolve(directory));
    fastify.register(route.createRoute, {
      prefix: `store/${model}`,
      controller
    });
  });
};
