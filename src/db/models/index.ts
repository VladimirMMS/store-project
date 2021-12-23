/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import {Sequelize} from 'sequelize';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
import config from '../config/config';

dotenv.config();
const db:any = {};
let sequelize: any;

// eslint-disable-next-line prefer-const
sequelize = new Sequelize('store', 'postgres', config.development.password, {
	dialect: 'postgres'
});

fs
	.readdirSync(__dirname)
	.filter((file: string) => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
	})
	.forEach(async (file: any) => {
		// const model2 = await import(path.join(__dirname, file))(sequelize, Sequelize);
		const model = require(path.join(__dirname, file))(sequelize, Sequelize);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
