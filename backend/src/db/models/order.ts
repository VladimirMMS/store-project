import { UUIDV4, Model } from 'sequelize/dist';
import { OrderAttribute } from '../../interfaces/index';

export default (sequelize: any, DataTypes: any) => {
  class Order extends Model<OrderAttribute> {
    id!: string;

    customerId!: string;

    address!: string;

    static associate(models: any) {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customerId'
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: 'orderId'
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
