/*
 * Customer API
 */

//  Libraries
const Router = require("express").Router();

// Mysql connection instance
const { Query } = require("../../database/index");

// Configs
const { log4js } = require("../../config/logs.config");
const customerLogger = log4js.getLogger("customer");

// @Route   POST /customer
// @des     authenticate customer
// @access  PUBLIC

Router.post("/", async (req, res) => {
  try {
    const { email, fullname } = req.body;

    // check if customer already exisit in database
    const getCustomer = await Query(`SELECT Customer_ID 
    FROM   customer 
    WHERE  email = "${email}"; `);

    if (getCustomer.length > 0) {
      return res.status(200).json({ customerID: getCustomer[0].Customer_ID });
    }

    // Create new customer record in database
    const addCustomer = await Query(`INSERT INTO customer
    (
    Fullname, Email
    )
    VALUES(
        "${fullname}","${email}"
    );
    `);

    const getNewCustomerId = await Query(
      `SELECT Customer_ID FROM customer WHERE Email= "${email}";`
    );

    return res.status(200).json({ customerID: getNewCustomerId[0].Customer_ID });
  } catch (error) {
    customerLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
