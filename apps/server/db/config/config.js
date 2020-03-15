require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres"
  }
};
