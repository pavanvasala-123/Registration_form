const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("users", "root", "pavan123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
