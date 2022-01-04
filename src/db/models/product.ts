'use strict';
import { Model } from 'sequelize';

interface ProductAttribute {
  id: number;
  name: string;
  price: number;
}

export = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttribute> {
    id!: number;

    name!: string;

    price!: number;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static associate(models: any) {}
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
