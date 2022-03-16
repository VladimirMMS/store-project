'use strict';
import { Model } from 'sequelize';
import { ProductAttribute } from '../../interfaces/index';

export = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttribute> {
    id!: number;

    name!: string;

    price!: number;

    static associate(models: any) {
      models.Product.belongsToMany(models.Order, {
        foreignKey: 'orderId',
        through: 'OrderVsProduct'
      });
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Product'
    }
  );
  return Product;
};
