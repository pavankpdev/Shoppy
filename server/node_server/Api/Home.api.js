/*
 * Prouduct API
 */

//  Libraries
const Router = require("express").Router();
const mysql = require("mysql");
const axios = require("axios");

// Mysql connection instance
const { Query } = require("../database/index");

// Configs
const { log4js } = require("../config/logs.config");
const authLogger = log4js.getLogger("auth");

// @Route   GET /
// @des     GET all the list of products
// @access  PUBLIC
Router.get("/", async (req, res) => {
  try {
    // Get all product data
    const allProducts = await Query("select * from product;");

    return res.status(200).json(allProducts);
  } catch (error) {
    authLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   GET /:id
// @des     GET specific product details
// @access  PUBLIC
Router.get("/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;

    // get specific product details using product_id
    const productDetail = await Query(
      `select * from product WHERE Product_ID=${product_id};`
    );

    return res.status(200).json(productDetail);
  } catch (error) {
    authLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   POST /upload
// @des     UPLOAD products data to database
// @access  PUBLIC
Router.post("/upload", async (req, res) => {
  try {
    const { name, description, price, seller, category } = req.body.productData;

    const uploadProduct = await Query(
      `INSERT INTO product (Product_name, Product_description, Product_Price, Seller, Category ) 
      VALUES  (${name}, ${description},${price},${seller},${category});`
    );

    return res.status(200).json(uploadProduct);
  } catch (error) {
    authLogger.error(error);
    return res.json({ error: error.message });
  }
});
module.exports = Router;
