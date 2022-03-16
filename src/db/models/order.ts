import { UUIDV4, Model } from 'sequelize/dist';
import { OrderAttribute } from '../../interfaces/index';

export = (sequelize: any, DataTypes: any) => {
  class Order extends Model<OrderAttribute> {
    id!: string;

    customerId!: string;

    productId!: string;

    address!: string;

    static associate(models: any) {
      models.Order.hasMany(models.Customer, {
        sourceKey: 'id',
        foreignKey: 'customerId'
      });
      models.Order.hasMany(models.Product, {
        sourceKey: 'id',
        foreignKey: 'productId'
      });
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Order'
    }
  );
  return Order;
};
