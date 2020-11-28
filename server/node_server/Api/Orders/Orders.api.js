/*
 * Orders API
 */

//  Libraries
const Router = require("express").Router();

// Configs
const { log4js } = require("../../config/logs.config");
const ordersLogger = log4js.getLogger("orders");

// @Route   GET /orders
// @des     GET all orders of a customer
// @access  PRIVATE
Router.get("/orders", async (_, res) => {
  try {
    const allOrders = await Query(`select * from orders`);
    return res.status(200).json(allOrders);
  } catch (error) {
    ordersLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   POST /orders/:product_id
// @des     ADD new product to orders database
// @access  PRIVATE
Router.get("/orders/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;

    // update orders table with product data
    const productDetail = await Query(
      `select * from product WHERE Product_ID=${product_id};`
    );

    return res.status(200).json(productDetail);
  } catch (error) {
    ordersLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
