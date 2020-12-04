/*
 * Orders API
 */

//  Libraries
const Router = require("express").Router();

// Mysql connection instance
const { Query } = require("../../database/index");

// Utilities
const { getCurrentDateTime } = require("../../utils");

// Configs
const { log4js } = require("../../config/logs.config");
const ordersLogger = log4js.getLogger("orders");

// @Route   GET /orders
// @des     GET all orders of a customer
// @access  PRIVATE
Router.get("/", async (_, res) => {
  try {
    const allOrders = await Query(`
    SELECT product.Product_image1 as image1 , product.Product_image2 as image1, 
    product.Product_name as image2, orders.Price as price, 
    orders.Date as orderDate, shipping.Status  as shippingStatus
    FROM product 
    INNER JOIN orders ON product.Product_ID = orders.Order_id 
    INNER JOIN shipping ON orders.Order_id = shipping.Shipping_ID
    `);

    return res.status(200).json(allOrders);
  } catch (error) {
    ordersLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   POST /orders/:cutomer_id
// @des     ADD new product to database when purchase is successfull
// @access  PRIVATE
Router.post("/:customer_id", async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { purchaseData } = req.body;

    // get the Current order ID
    let getCurrentOrderID = await Query(
      `SELECT MAX(current_order_id) as id FROM orders;`
    );

    getCurrentOrderID = getCurrentOrderID[0].id
      ? getCurrentOrderID[0].id + 1
      : 1;
    console.log(getCurrentOrderID);
    for (let index = 0; index < purchaseData.length; index++) {
      const { price, quantity, address, productID } = purchaseData[index];

      // add the product data to order table
      await Query(`INSERT INTO orders
      (
      Customer_ID,
      Quantity,
      Product_ID,
      Price,
      current_order_id,
      address,
      shippind_date
      )
      VALUES (
        ${customer_id}, 
        ${quantity}, 
        ${productID}, 
        ${price},
        ${getCurrentOrderID},
        "${address}", 
        "${getCurrentDateTime("date")}"
      )`);
    }

    return res
      .status(200)
      .json({ message: "Order has been successfuly placed" });
  } catch (error) {
    ordersLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
