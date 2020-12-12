const { Query } = require("../../database/index");
const { getCurrentDateTime } = require("../../utils");

const getAllOrders = async (customer_id) =>
  await Query(`
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

const InsertNewOrder = async (
  customer_id,
  quantity,
  Product_ID,
  Product_Price,
  getCurrentOrderID,
  address,
) =>
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

const getTrackingDataOfProduct = async (shipping_id, customer_id) =>
  await Query(`
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

const getNewOrderID = async () =>
  await Query(`SELECT MAX(current_order_id) as id FROM orders;`);

module.exports = { getAllOrders, InsertNewOrder, getTrackingDataOfProduct,getNewOrderID };
