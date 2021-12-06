import sequelize from "../config/config";
import Sequelize, { DataTypes, Model } from 'sequelize'



interface ClientInstance extends Model {
    id: number,
    name:string,
    lastname: string | null, 
    age:number,
}


const Customer = sequelize.define<ClientInstance>("Customer",
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
        name: {
            type: new DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: new DataTypes.STRING,
            allowNull: true
        },
        age: {
            type: new DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        tableName:"Customer"
    }
)


export default Customer;
