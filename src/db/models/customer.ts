'use strict';
import { UUIDV4, Model } from 'sequelize';
import { CustomerAttribute } from '../../interfaces/index';

export = (sequelize: any, DataTypes: any) => {
  class Customer extends Model<CustomerAttribute> {
    id!: string;

    name!: string;

    lastname!: string;

    age!: number;

    phone!: number;

    static associate(models: any) {
      models.Customer.hasMany(models.Order, {
        foreignKey: 'orderId'
      });
    }
  }
  Customer.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Customer'
    }
  );
  return Customer;
};
