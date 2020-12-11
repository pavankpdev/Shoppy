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

// @Route   GET /orders/:customer_id
// @des     GET all orders of a customer
// @access  PRIVATE
Router.get("/:customer_id", async (req, res) => {
  try {
    const { customer_id } = req.params;

    const allOrders = await Query(`
    SELECT product.product_image1      AS image1, 
       product.product_image2      AS image2, 
       product.product_name        AS productName, 
       product.product_description AS productDescription, 
       orders.price                AS price, 
       orders.shippind_date        AS shippingDate, 
       orders.shipping_status      AS shippingStatus, 
       orders.address              AS shippingAddress, 
       orders.quantity             AS quantity, 
       orders.current_order_id     AS orderId, 
       orders.order_id             AS shippingId,
       orders.Product_ID           AS productID  
FROM   product 
       INNER JOIN orders 
               ON orders.product_id = product.product_id 
                  AND orders.customer_id = ${customer_id}; 
    `);

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

    // get the Current order ID
    let getCurrentOrderID = await Query(
      `SELECT MAX(current_order_id) as id FROM orders;`
    );

    getCurrentOrderID = getCurrentOrderID[0].id
      ? getCurrentOrderID[0].id + 1
      : 1;
    console.log(getCurrentOrderID);
    for (let index = 0; index < purchaseData.length; index++) {
      const { Product_Price, quantity, Product_ID } = purchaseData[index];

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
        ${Product_ID}, 
        ${Product_Price},
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

// @Route   GET /orders/track/:shipping_id/:customer_id
// @des     get tracking of the requested order
// @access  PRIVATE
Router.get("/track/:shipping_id/:customer_id", async (req, res) => {
  try {
    const { shipping_id, customer_id } = req.params;

    const getTrackingData = await Query(`
    SELECT product.product_image1      AS image1, 
       product.product_image2      AS image2, 
       product.product_name        AS productName, 
       product.product_description AS productDescription, 
       orders.price                AS price, 
       orders.shippind_date        AS shippingDate, 
       orders.shipping_status      AS shippingStatus, 
       orders.address              AS shippingAddress, 
       orders.quantity             AS quantity, 
       orders.current_order_id     AS orderId, 
       orders.order_id             AS shippingId,
       orders.Product_ID           AS productID 
FROM   product 
       INNER JOIN orders 
               ON orders.product_id = product.product_id 
                  AND orders.order_id = ${shipping_id} 
                  AND orders.customer_id = ${customer_id};  `);
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
