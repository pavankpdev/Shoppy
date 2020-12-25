delimiter //

-- Stored Procedure to add new review to review_audit table

CREATE PROCEDURE addnewreview (in reviewid    int, 
                               IN customer_id int, 
                               IN product_id  int, 
                               IN rating      int, 
                               IN review_desc varchar(500), 
                               IN sub         varchar(300), 
                               IN reviewdate  date) 
BEGIN 
  -- Inserting into audit table
  INSERT INTO `shoppy`.`review_audit` 
              ( 
                          `review_id`, 
                          `customer_id`, 
                          `product_id`, 
                          `rating`, 
                          `review_desc`, 
                          `subject`, 
                          `reviewdate` 
              ) 
              VALUES 
              ( 
                          reviewid, 
                          customer_id, 
                          product_id, 
                          rating, 
                          review_desc, 
                          sub, 
                          reviewdate 
              );
END// 

-- Stored Procedure to update review audit status in reviews table

CREATE PROCEDURE updatereviewaudit (in reviewid int, in audit_status varchar(20)) 
BEGIN 
  -- Updating reviews table
UPDATE `shoppy`.`reviews`
SET
`Audit_status` = audit_status
WHERE `Review_ID` = reviewid;

END// 

delimiter ;