import sequelize from "./config";

const initializeDatabase = async () => {
    try {
        await sequelize.sync();
      } catch (err) {
        console.error(err);
      }
}

export default initializeDatabase;
