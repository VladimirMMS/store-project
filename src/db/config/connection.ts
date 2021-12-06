import sequelize from "./config";

const initializeDatabase = async () => {
    try {
        sequelize.sync({force:true})
        await sequelize.sync();
      } catch (err) {
        console.error(err);
      }
}

export default initializeDatabase;
