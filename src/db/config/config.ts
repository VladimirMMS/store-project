import { Dialect, Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config();

const dbName = process.env.POSTGRES_DB as string
const dbUser = process.env.POSTGRES_USER as string
const dbHost = process.env.DB_HOST
const dbDialect = process.env.DB_DIALECT as Dialect
const dbPassword = process.env.POSTGRES_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host:dbHost,
    dialect:'postgres'
})




export default sequelizeConnection;
