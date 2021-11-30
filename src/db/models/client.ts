import sequelize from "../config/config";
import Sequelize from 'sequelize'

const Client = sequelize.define('Client', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    firstName: {
        type: Sequelize.STRING,

    },
    lastName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})


export default Client;