import { Sequelize } from "sequelize";

const dbConn = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

export default dbConn;
