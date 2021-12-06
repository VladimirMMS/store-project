import { Dialect, Sequelize } from "sequelize";


const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDialect = process.env.dbDialect as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize('store', 'postgres', '20012020', {
    host:'localhost',
    dialect:'postgres'
})





export default sequelizeConnection;