/* eslint-disable linebreak-style */
'use strict';
module.exports = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	up: async (queryInterface:any, Sequelize:any) => {
		await queryInterface.createTable('Products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			price: {
				type: Sequelize.INTEGER,
				allowNull: false

			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	down: async (queryInterface:any, Sequelize:any) => {
		await queryInterface.dropTable('Products');
	}
};