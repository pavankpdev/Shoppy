-- Trigger to call addnewreview stored procedure
create trigger addNewReview 
after Insert 
ON reviews
FOR EACH ROW
CALL addnewreview(new.Review_ID);

-- Trigger to call updatereviewaudit stored procedure
create trigger updateReviewAudit 
after update 
ON review_audit
FOR EACH ROW
CALL updatereviewaudit(new.Review_ID, new.Audit_status);

-- Trigger to call addneworder stored procedure
create trigger addorders 
after insert 
ON ordersdummy
FOR EACH ROW
CALL addneworder(new.Order_id,new.Customer_ID,new.Product_ID,new.Quantity,new.Price,new.shippind_date,new.address);
