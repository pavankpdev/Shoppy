/*
 * Admin API
 */

//  Libraries
const Router = require("express").Router();

const { Query } = require("../../database/");

// Configs
const { log4js } = require("../../config/logs.config");
const adminLogger = log4js.getLogger("admin");

// @Route   GET /admin/pending-reviews
// @des     Gets all the list of reviews which requires auditing
// @access  PUBLIC
Router.get("/pending-reviews", async (_, res) => {
  try {
    const getPendingReviews = await Query(
      `select 
      review_audit.Audit_ID, 
      review_audit.Audit_status, 
      reviews.Review_desc, 
      reviews.subject, 
      reviews.reviewdate 
    from 
      review_audit 
      INNER Join reviews ON reviews.Review_ID = review_audit.Review_ID 
      AND review_audit.Audit_status = "Pending"
    `
    );
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
    console.log(req.body);
    for (const audit of auditList) {
      await Query(
        `UPDATE review_audit SET Audit_status = "${audit.Audit_status}" WHERE Audit_ID = ${audit.Audit_ID};`
      );
    }

    const getPendingReviews = await Query(
      `select 
      review_audit.Audit_ID, 
      review_audit.Audit_status, 
      reviews.Review_desc, 
      reviews.subject, 
      reviews.reviewdate 
    from 
      review_audit 
      INNER Join reviews ON reviews.Review_ID = review_audit.Review_ID 
      AND review_audit.Audit_status = "Pending";`
    );
    console.log(getPendingReviews);
    return res.json(getPendingReviews);
  } catch (error) {
    adminLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
