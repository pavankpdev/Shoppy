delimiter // 

-- Stored Procedure to add new review to review_audit table
CREATE PROCEDURE addnewreview (in reviewid int)
BEGIN 
  -- Inserting into audit table
  INSERT INTO `shoppy`.`review_audit` (`review_id`) VALUES (reviewid);

END// 

-- Stored Procedure to update review audit status in reviews table
CREATE PROCEDURE updatereviewaudit (in reviewid int, IN audit_status varchar(20)) 
BEGIN 
  -- Updating reviews table
  UPDATE `shoppy`.`reviews` 
  SET    `audit_status` = audit_status 
  WHERE  `review_id` = reviewid;END// 

-- Stored Procedure to add new order
CREATE PROCEDURE addneworder (in Order_id int,in customerID int,in productID int,
                              in quantity int,in price int, in datee date,in address varchar(500))
BEGIN 
  INSERT INTO `shoppy`.`orders` (`Order_id`,
`Customer_ID`,
`Quantity`,
`Product_ID`,
`Price`,
`order_date`) VALUES (Order_id,customerID,quantity,productID,price,datee);

INSERT INTO `shoppy`.`shipping`
(
`Order_id`,
`address`)
VALUES
(
Order_id,
address);


END// 

delimiter ;