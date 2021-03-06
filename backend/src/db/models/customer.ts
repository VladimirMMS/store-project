'use strict';
import { UUIDV4, Model } from 'sequelize';
import { CustomerAttribute } from '../../interfaces/index';

export default (sequelize: any, DataTypes: any) => {
  class Customer extends Model<CustomerAttribute> {
    id!: string;

    name!: string;

    lastName!: string;

    date!: string;

    phone!: number;

    static associate(models: any) {
      Customer.hasMany(models.Order, {
        foreignKey: 'customerId'
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
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Customer',
      freezeTableName: true
    }
  );
  return Customer;
};
