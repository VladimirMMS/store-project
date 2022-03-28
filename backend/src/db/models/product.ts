'use strict';
import { Model, UUIDV4 } from 'sequelize';
import { ProductAttribute } from '../../interfaces/index';

export default (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttribute> {
    id!: number;

    name!: string;

    price!: number;

    categoryId!: number;

    static associate(models: any) {
      Product.hasMany(models.Order, {
        foreignKey: 'productId'
      });
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      });
    }
  }
  Product.init(
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
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Product',
      freezeTableName: true
    }
  );
  return Product;
};