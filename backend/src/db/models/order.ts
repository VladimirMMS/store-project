import { UUIDV4, Model } from 'sequelize/dist';
import { OrderAttribute } from '../../interfaces/index';

export default (sequelize: any, DataTypes: any) => {
  class Order extends Model<OrderAttribute> {
    orderId!: string;

    customerId!: string;

    productId!: string;

    address!: string;

    static associate(models: any) {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customerId'
      });
      Order.belongsTo(models.Product, {
        foreignKey: 'productId'
      });
    }
  }
  Order.init(
    {
      orderId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      productId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false
      },
      customerId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Order',
      freezeTableName: true
    }
  );
  return Order;
};
