"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.dbDialect;
const dbPassword = process.env.DB_PASSWORD;
const sequelizeConnection = new sequelize_1.Sequelize('store', 'postgres', '20012020', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelizeConnection;
