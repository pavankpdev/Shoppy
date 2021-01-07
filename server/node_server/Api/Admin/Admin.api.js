/*
 * Admin API
 */

//  Libraries
const Router = require("express").Router();

const { Query } = require("../../database/");

// Configs
const { log4js } = require("../../config/logs.config");
const adminLogger = log4js.getLogger("admin");

// DB Queries
const {
  getCategoryWiseOrderReport,
  getPendingAuditReviews,
  getProductSalesReport,
  getTotalOrderReport,
  updateReviewAudit,
} = require("../../Query/Admin");

// @Route   GET /admin/pending-reviews
// @des     Gets all the list of reviews which requires auditing
// @access  PUBLIC
Router.get("/pending-reviews", async (_, res) => {
  try {
    const getPendingReviews = await getPendingAuditReviews();
    return res.json(getPendingReviews);
  } catch (error) {
    adminLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   POST /admin/audit-reviews
// @des     updates audit status of a review
// @access  PUBLIC
Router.post("/audit-reviews", async (req, res) => {
  try {
    const { auditList } = req.body;
    for (const audit of auditList) {
      await updateReviewAudit(audit);
    }

    const getPendingReviews = await getPendingAuditReviews();
    return res.json(getPendingReviews);
  } catch (error) {
    adminLogger.error(error);
    return res.json({ error: error.message });
  }
});

// @Route   GET /admin/analytics
// @des     Generates sales and orders reports
// @access  PUBLIC
Router.get("/analytics", async (req, res) => {
  try {
    const getAllCategory = await getCategoryWiseOrderReport();

    const orderReports = {
      Total: await getTotalOrderReport(),
      "Electricals & Electronics": getAllCategory.filter(
        ({ category }) => category === "Electricals & Electronics"
      ),
      Sports: getAllCategory.filter(({ category }) => category === "Sports"),
      "Home Appliances": getAllCategory.filter(
        ({ category }) => category === "Home Appliances"
      ),
      Furniture: getAllCategory.filter(
        ({ category }) => category === "Furniture"
      ),
    };
    
    const productSalesReport = await getProductSalesReport();

    return res.status(200).json({ orderReports, productSalesReport });
  } catch (error) {
    adminLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
