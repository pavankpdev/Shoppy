-- order report total
SELECT DISTINCT
    order_date AS Date,
    Fullname AS CustomerName,
    COUNT(O.Order_id) AS TotalProducts,
    SUM(Quantity * Price) AS TotalPrice
FROM
    orders O
        JOIN
    customer C ON O.Customer_ID = C.Customer_ID
GROUP BY C.Customer_ID , O.order_date
ORDER BY O.order_date;

-- order report by categories
SELECT DISTINCT order_date            AS Date, 
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
ORDER  BY O.order_date;

-- product report
SELECT O.order_date              AS Date, 
       P.product_id, 
       product_name, 
       Sum(O.quantity)           AS unitsSold, 
       O.price                   AS unitPrice, 
       Sum(O.quantity * O.price) AS TotalPrice 
FROM   product P 
       JOIN orders O 
         ON O.product_id = P.product_id 
GROUP  BY P.product_id 
ORDER  BY O.order_date; 