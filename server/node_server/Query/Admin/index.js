const { Query } = require("../../database/index");

const getPendingAuditReviews = async () =>
  await Query(`SELECT review_audit.audit_id, 
review_audit.audit_status, 
reviews.review_desc, 
reviews.subject, 
reviews.reviewdate 
FROM   review_audit 
INNER JOIN reviews 
        ON reviews.review_id = review_audit.review_id 
           AND review_audit.audit_status = "pending"; `);

const updateReviewAudit = async ({ audit_status, audit_id }) =>
  await Query(
    `UPDATE review_audit SET Audit_status = "${audit_status}" WHERE Audit_ID = ${audit_id};`
  );

const getTotalOrderReport = async () =>
  await Query(`SELECT DISTINCT
order_date AS Date,
Fullname AS CustomerName,
COUNT(O.Order_id) AS TotalProducts,
SUM(Quantity * Price) AS TotalPrice
FROM
orders O
    JOIN
customer C ON O.Customer_ID = C.Customer_ID
GROUP BY C.Customer_ID , O.order_date
ORDER BY O.order_date;`);

const getCategoryWiseOrderReport = async () =>
  Query(`SELECT DISTINCT order_date            AS Date, 
fullname              AS CustomerName, 
Count(O.order_id)     AS TotalProducts, 
Sum(quantity * price) AS TotalPrice, 
P.category 
FROM   orders O 
JOIN customer C 
ON O.customer_id = C.customer_id 
JOIN product P 
ON O.product_id = P.product_id 
GROUP  BY C.customer_id, 
O.order_date, 
P.category 
ORDER  BY O.order_date;`);

const getProductSalesReport = async () =>
  await Query(`SELECT O.order_date              AS Date, 
P.product_id, 
product_name, 
Sum(O.quantity)           AS unitsSold, 
O.price                   AS unitPrice, 
Sum(O.quantity * O.price) AS TotalPrice 
FROM   product P 
JOIN orders O 
  ON O.product_id = P.product_id 
GROUP  BY P.product_id 
ORDER  BY O.order_date; `);

module.exports = {
  getTotalOrderReport,
  getCategoryWiseOrderReport,
  getProductSalesReport,
  getPendingAuditReviews,
  updateReviewAudit,
};
