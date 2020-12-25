const { Query } = require("../../database/index");
const { getCurrentDateTime } = require("../../utils");

const getAllreviewsOfAProduct = async (product_id) =>
  await Query(`
SELECT reviews.Audit_status, 
   reviews.subject     AS subject, 
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

const InsertNewReview = async (
  customer_id,
  product_id,
  rating,
  review,
  subject
) =>
  await Query(`
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

module.exports = { getAllreviewsOfAProduct, InsertNewReview };
