
const {
  Model
} = require('sequelize');


interface ProductAttribute {
  id:number,
  name:string,
  price:number,
  customer_id:string
  
}

module.exports = (sequelize:any, DataTypes:any) => {
  class Product extends Model<ProductAttribute>{
    id!:number;
    name!:string;
    price!:number;
    customer_id!:string;

    static associate(models:any) {
      Product.belongsToMany(models.Customer, {
        through:'ProductVSCustomer'
      })
    }
  };
  
    Product.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};