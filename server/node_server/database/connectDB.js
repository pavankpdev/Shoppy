// Libraries
const mysql = require("mysql");

console.log({
  host:
    process.env.NODE_ENV === "development" ? "localhost" : process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  timeout: 60000,
});

// DB connection Instance
const mysqlConnection = mysql.createConnection({
  host:
    process.env.NODE_ENV === "development" ? "localhost" : process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.NODE_ENV === "development" ? "pavan" : process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  timeout: 60000,
});

module.exports = { mysqlConnection };
