// Libraries
const mysql = require("mysql");

// DB connection Instance
const mysqlConnection = mysql.createConnection({
  host:
    process.env.NODE_ENV === "development" ? "localhost" : process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

module.exports = { mysqlConnection };
