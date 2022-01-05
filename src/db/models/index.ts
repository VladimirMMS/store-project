'use strict';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import config from '../config/config';
import glob from 'fast-glob';

dotenv.config();
const db: any = {};
let sequelize: any;

function getModels() {
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

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  return db;
}

export default getModels;
