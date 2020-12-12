/*
 * Prouduct API
 */

//  Libraries
const Router = require("express").Router();

// Configs
const { log4js } = require("../../config/logs.config");
const productsLogger = log4js.getLogger("products");

// Queries
const {
  insertNewProduct,
  getSpecifiedProductData,
  getProductsWithCategory,
} = require("../../Query/Products");

// @Route   POST /products/upload
// @des     UPLOAD products data to database
// @access  PUBLIC
Router.post("/upload", async (req, res) => {
  try {
    // Upload product to DB
    const uploadProduct = await insertNewProduct(req.body.productData);

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
    const productDetail = await getSpecifiedProductData(product_id);

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
    const productDetail = await getProductsWithCategory(category);

    if (productDetail.length === 0)
      return res.status(400).json({
        error: `Product with the category ${category}, was not found`,
      });

    return res.status(200).json(productDetail);
  } catch (error) {
    productsLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
