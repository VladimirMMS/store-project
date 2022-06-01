import { UUIDV4, Model } from 'sequelize/dist';
import { OrderItemAttribute } from '../../interfaces/index';

export default (sequelize: any, DataTypes: any) => {
  class OrderItem extends Model<OrderItemAttribute> {
    id!: number;

    orderId!: string;

    productId!: string;

    quantity!: number;

    static associate(models: any) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: 'orderId'
      });
      OrderItem.belongsTo(models.Product, {
        foreignKey: 'productId'
      });
    }
  }
  OrderItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      orderId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        unique: false,
        allowNull: false
      },
      productId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        unique: false,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'OrderItem',
      freezeTableName: true
    }
  );
  return OrderItem;
};
