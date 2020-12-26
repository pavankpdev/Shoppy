/*
 * Orders API
 */

//  Libraries
const Router = require("express").Router();

// Configs
const { log4js } = require("../../config/logs.config");
const ordersLogger = log4js.getLogger("orders");

// Queries
const {
  getAllOrders,
  InsertNewOrder,
  getTrackingDataOfProduct,
  getNewOrderID,
} = require("../../Query/Orders");

// @Route   GET /orders/:customer_id
// @des     GET all orders of a customer
// @access  PRIVATE
Router.get("/:customer_id", async (req, res) => {
  try {
    const { customer_id } = req.params;

    const allOrders = await getAllOrders(customer_id);

    return res.status(200).json(allOrders);
  } catch (error) {
    ordersLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   POST /orders/new/:customer_id
// @des     ADD new product to database when purchase is successfull
// @access  PRIVATE
Router.post("/new/:customer_id", async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { purchaseData, address } = req.body;

    for (let index = 0; index < purchaseData.length; index++) {
      const { Product_Price, quantity, Product_ID } = purchaseData[index];

      // add the product data to order table
      await InsertNewOrder(
        customer_id,
        quantity,
        Product_ID,
        Product_Price,
        address
      );
    }

    return res
      .status(200)
      .json({ message: "Order has been successfuly placed" });
  } catch (error) {
    ordersLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   GET /orders/track/:shipping_id/:customer_id
// @des     get tracking of the requested order
// @access  PRIVATE
Router.get("/track/:shipping_id/:customer_id", async (req, res) => {
  try {
    const { shipping_id, customer_id } = req.params;

    const getTrackingData = await getTrackingDataOfProduct(
      shipping_id,
      customer_id
    );

    if (getTrackingData.length === 0) {
      return res.status(400).json({ error: "Product tracking data not found" });
    }

    return res.json(getTrackingData[0]);
  } catch (error) {
    ordersLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
