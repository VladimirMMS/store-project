/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { UUIDV4 } from 'sequelize/dist';
import { Model } from 'sequelize';

interface CustomerAttribute {
  id:string,
  name:string,
  lastname:string,
  age:number
}

export = (sequelize:any, DataTypes:any) => {
	class Customer extends Model<CustomerAttribute>{
		id!:string;
		name!:string;
		lastname!:string;
		age!:number;

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		static associate(models:any) {

		}
	}
	Customer.init({
		id: {
			type: DataTypes.UUID,
			defaultValue:UUIDV4,
			allowNull:false,
			primaryKey:true
		},
		name: {
			type: DataTypes.STRING,
			allowNull:false
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull:false
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull:false
		}
	}, {
		sequelize,
		modelName: 'Customer',
	});
	return Customer;
};








