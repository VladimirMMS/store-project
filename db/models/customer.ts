'use strict';

import { UUIDV4 } from "sequelize/dist";

const {
  Model
} = require('sequelize');



interface CustomerAttribute {
  id:string,
  name:string,
  lastname:string,
  age:number
}


(sequelize:any, DataTypes:any) => {
  class Customer extends Model<CustomerAttribute>{
    id!:string;
    name!:string;
    lastname!:string;
    age!:number

    static associate(models:any) {
      Customer.belongsToMany(models.Product, {
        through:'ProductVSCustomer'
      })
    }
  };
  
  Customer.init({
    id: {
      type: DataTypes.UUID,
      defaultValue:UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull:false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};








