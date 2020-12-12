const { Query } = require("../../database/index");

const getAllProducts = async () => await Query("select * from product;");

module.exports = { getAllProducts };
