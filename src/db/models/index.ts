'use strict';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import config from '../config/config';
import glob from 'fast-glob';

dotenv.config();
const db: any = {};
let sequelize: any;

function initDb() {
  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      dialect: 'postgres'
    }
  );

  glob
    .sync(['**src/db/models/*.ts', '!**src/db/models/index.ts'], {
      onlyFiles: true,
      absolute: true
    })
    .map(async (file: any) => {
      const { default: models } = await import(file);
      const model = models(sequelize, Sequelize);
      db[model.name] = model;
    });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  return db;
}
export async function getAssocation() {
  await initDb();
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}

export async function getModels() {
  await initDb();
  return db.sequelize.models;
}

export async function getModel(modelName: string) {
  await initDb();
  return db.sequelize.models[modelName];
}

export default initDb;
