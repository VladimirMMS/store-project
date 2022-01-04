/* eslint-disable prettier/prettier */

'use strict';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
const basename = path.basename(__filename);
import config from '../config/config';

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
  fs.readdirSync(__dirname)
    .filter((file: string) => {
      return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
    })
    .map(async (file: any) => {
      const { default: models } = await import(path.join(__dirname, file));
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
