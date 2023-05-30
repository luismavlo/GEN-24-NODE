const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "dbcafeapp24",
  logging: false,
});

module.exports = { db };
