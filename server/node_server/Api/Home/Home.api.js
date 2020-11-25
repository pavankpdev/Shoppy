/*
 * Prouduct API
 */

//  Libraries
const Router = require("express").Router();
const mysql = require("mysql");
const axios = require("axios");

// Mysql connection instance
const { Query } = require("../../database/index");

// Configs
const { log4js } = require("../../config/logs.config");
const homeLogger = log4js.getLogger("home");

// @Route   GET /
// @des     GET all the list of products
// @access  PUBLIC
Router.get("/", async (req, res) => {
  try {
    // Get all product data
    const allProducts = await Query("select * from product;");
    
    return res.status(200).json(allProducts);
  } catch (error) {
    homeLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
