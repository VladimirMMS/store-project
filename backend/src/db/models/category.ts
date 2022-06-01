'use strict';
import { Model } from 'sequelize';
import { CategoryAttribute } from '../../interfaces/index';

export default (sequelize: any, DataTypes: any) => {
  class Category extends Model<CategoryAttribute> {
    id!: number;

    name!: string;

    static associate(models: any) {
      Category.hasMany(models.Product, {
        foreignKey: 'categoryId'
      });
    }
  }

  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Category',
      freezeTableName: true
    }
  );
  return Category;
};
