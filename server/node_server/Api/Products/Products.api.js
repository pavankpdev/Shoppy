/*
 * Prouduct API
 */

//  Libraries
const Router = require("express").Router();

// Mysql query wrapper
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
      )}","${img1}","${img2}",${price.replace(
        /[^0-9 ]/g,
        ""
      )},"${seller.replace(/[^a-zA-Z ]/g, "")}","${category}");`
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

// @Route   GET /products/p/:id
// @des     GET specific product details
// @access  PUBLIC
Router.get("/p/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;

    // get specific product details using product_id
    const productDetail = await Query(
      `select * from product WHERE Product_ID=${product_id};`
    );

    if (productDetail.length === 0)
      return res
        .status(400)
        .json({ error: `Product with the id ${product_id}, was not found` });

    return res.status(200).json(productDetail[0]);
  } catch (error) {
    productsLogger.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// @Route   GET /products/c/:category
// @des     GET product data of a specific category
// @access  PUBLIC
Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;

    // get specific product details using category
    const productDetail = await Query(
      `select * from product where Category="${category}"`
    );

    if (productDetail.length === 0)
      return res
        .status(400)
        .json({
          error: `Product with the category ${category}, was not found`,
        });

    return res.status(200).json(productDetail);
  } catch (error) {
    productsLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
