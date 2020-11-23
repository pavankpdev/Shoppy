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
const productsLogger = log4js.getLogger("products");

// @Route   POST /products/upload
// @des     UPLOAD products data to database
// @access  PUBLIC
Router.post("/upload", async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      seller,
      category,
      img1,
      img2,
    } = req.body.productData;

    // Upload product to DB
    const uploadProduct = await Query(
      `INSERT INTO product (Product_name, Product_description, Product_image1, Product_image2, Product_Price, Seller, Category ) 
        VALUES  ("${name.replace(/[^a-zA-Z ]/g, "")}", "${description.replace(
        /[^a-zA-Z ]/g,
        ""
      )}","${img1}","${img2}",${price.replace(/[^0-9 ]/g, "")},"${seller.replace(
        /[^a-zA-Z ]/g,
        ""
      )}","${category}");`
    );

    return res.status(200).json({
      message: "Product successfully inserted",
      total_products: uploadProduct.insertId,
    });
  } catch (error) {
    productsLogger.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// @Route   GET /products/:id
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
    productsLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
