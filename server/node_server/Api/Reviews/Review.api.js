/*
 * Prouduct API
 */

//  Libraries
const Router = require("express").Router();

// Configs
const { log4js } = require("../../config/logs.config");
const reviewLogger = log4js.getLogger("review");

// Queries
const {
  getAllreviewsOfAProduct,
  InsertNewReview,
} = require("../../Query/Reviews");

// @Route   GET /review/:product_id
// @des     Get all the reviews of the specified product
// @access  PRIVATE
Router.get("/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;

    // Get all the reviews related to the specfied product
    const getReviews = await getAllreviewsOfAProduct(product_id);

    const filterRejectedReviews = getReviews.filter(
      (e) => e.Audit_status !== "rejected"
    );

    return res.status(200).json(filterRejectedReviews);
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
    await InsertNewReview(customer_id, product_id, rating, review, subject);

    // get new updated set of reviews
    const getReviews = await getAllreviewsOfAProduct(product_id);

    const filterRejectedReviews = getReviews.filter(
      (e) => e.Audit_status !== "rejected"
    );

    return res.status(200).json({
      message: "Review successfully recorded",
      getReviews: filterRejectedReviews,
    });
  } catch (error) {
    reviewLogger.error(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = Router;
