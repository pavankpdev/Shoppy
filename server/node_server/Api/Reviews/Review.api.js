/*
 * Prouduct API
 */

//  Libraries
const Router = require("express").Router();

// Mysql query wrapper
const { Query } = require("../../database/index");

// Configs
const { log4js } = require("../../config/logs.config");
const reviewLogger = log4js.getLogger("review");

// Utils
const { getCurrentDateTime } = require("../../utils");

// @Route   GET /review/:product_id
// @des     Get all the reviews of the specified product
// @access  PRIVATE
Router.get("/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;

    // Get all the reviews related to the specfied product
    const getReviews = await Query(`
    SELECT reviews.subject     AS subject, 
       reviews.reviewdate  AS reviewdate, 
       reviews.rating      AS rating, 
       reviews.review_desc AS review, 
       customer.fullname   AS fullname, 
       customer.profilepic AS profilepic 
FROM   reviews 
       INNER JOIN customer 
               ON reviews.customer_id = customer.customer_id 
                  AND reviews.product_id = ${product_id}
    `);

    return res.status(200).json(getReviews);
  } catch (error) {
    reviewLogger.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// @Route   POST /review/new/:product_id/:customer_id
// @des     Add a new review to a product
// @access  PRIVATE
Router.post("/new/:product_id/:customer_id", async (req, res) => {
  try {
    const { product_id, customer_id } = req.params;
    const { rating, review, subject } = req.body.reviewData;

    // add new review
    const addNewreview = await Query(`
    INSERT INTO reviews
    (
      Customer_ID,
      Product_ID,
      Rating,
      Review_desc,
      Subject,
      reviewdate
    )
      VALUES
    (
      ${customer_id},
      ${product_id},
      ${rating},
      "${review}",
      "${subject}",
      "${getCurrentDateTime("date")}"
    )`);

    // get new updated set of reviews
    const getReviews = await Query(`
    SELECT reviews.subject     AS subject, 
       reviews.reviewdate  AS reviewdate, 
       reviews.rating      AS rating, 
       reviews.review_desc AS review, 
       customer.fullname   AS fullname, 
       customer.profilepic AS profilepic 
FROM   reviews 
       INNER JOIN customer 
               ON reviews.customer_id = customer.customer_id 
                  AND reviews.product_id = ${product_id}
    `);

    return res
      .status(200)
      .json({ message: "Review successfully recorded", getReviews });
  } catch (error) {
    reviewLogger.error(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = Router;
