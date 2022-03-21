import dotenv from 'dotenv';

dotenv.config();

export = {
  development: {
    username: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: 'store',
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
