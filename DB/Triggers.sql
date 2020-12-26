-- Trigger too call addnewreview stored procedure
create trigger addNewReview 
after Insert 
ON reviews
FOR EACH ROW
CALL addnewreview(new.Review_ID,new.Review_desc,new.Subject,new.reviewdate);

-- Trigger too call updatereviewaudit stored procedure
create trigger updateReviewAudit 
after update 
ON review_audit
FOR EACH ROW
CALL updatereviewaudit(new.Review_ID, new.Audit_status);

