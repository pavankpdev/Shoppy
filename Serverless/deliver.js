"use strict";
const mysql = require("serverless-mysql")();

module.exports.deliverOrder = async () => {
  mysql.config({
    host: "shoppy-db.cexukr3eruop.ap-south-1.rds.amazonaws.com",
    database: "shoppy",
    user: "root",
    password: "shoppy_password",
  });

  await mysql.connect();

  // Get all orders from DB
  let AllOrders = await mysql.query(
    `SELECT order_id 
     FROM shipping 
     WHERE shipping_status="Shipping";`
  );

  AllOrders.forEach(
    async ({ order_id }) =>
      await mysql.query(
        `UPDATE shipping 
         SET shipping_status = 'Delivered' 
         WHERE  ( order_id = ${order_id} ); `
      )
  );

  await mysql.end(); 

  return mysql.quit();
};
