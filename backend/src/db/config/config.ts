import dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  DB_HOST = 'localhost',
  DB_PORT = 4600
} = process.env;

const PG_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}`;
console.log(PG_URL);

const BASE_CONFIG = {
  url: PG_URL,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
};

export = {
  development: BASE_CONFIG,
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
