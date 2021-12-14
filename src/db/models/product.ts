
const {
  Model
} = require('sequelize');


interface ProductAttribute {
  id:number,
  name:string,
  price:number,
  customer_id:string
  
}

export = (sequelize:any, DataTypes:any) => {
  class Product extends Model<ProductAttribute>{
    id!:number;
    name!:string;
    price!:number;
    customer_id!:string;

    static associate(models:any) {
      
    }
  };
  
    Product.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};