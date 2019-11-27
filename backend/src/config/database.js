const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
module.exports = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: process.env.NODE_ENV == "development",
  define: {
    timezone: "-03:00",
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
  }
};
