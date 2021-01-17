/*
shoppy sql code

mysql v5.7
*/ 

CREATE DATABASE IF NOT EXISTS shoppy;

CREATE TABLE `shoppy`.`customer` (
  `Customer_ID` int AUTO_INCREMENT,
  `Fullname` varchar(100),
  `Email` varchar(200), 
  `profilepic` varchar(200),
  PRIMARY KEY (`Customer_ID`)
);

CREATE TABLE `shoppy`.`product` (
  `Product_ID` int AUTO_INCREMENT,
  `Product_name` varchar(200),
  `Product_description`varchar(2000),
  `Product_image1`varchar(500),
  `Product_image2`varchar(500),
  `Product_Price` int,
  `Seller` varchar(100),
  `Category` varchar(100),
  PRIMARY KEY (`Product_ID`)
);

CREATE TABLE `shoppy`.`reviews` (
  `Review_ID`int AUTO_INCREMENT,
  `Customer_ID` int,
  `Product_ID` int,
  `Rating` int,
  `Review_desc` varchar(500),
  `subject` varchar(500),
  `reviewdate` date,
  `Audit_status` varchar(20) default "Pending",
  PRIMARY KEY (`Review_ID`),
  FOREIGN KEY (Customer_ID) REFERENCES customer(Customer_ID),
  FOREIGN KEY (Product_ID) REFERENCES product(Product_ID)
);


CREATE TABLE `shoppy`.`ordersDummy` (
    `Order_id` INT AUTO_INCREMENT,
    `Customer_ID` INT,
    `Quantity` INT,
    `Product_ID` INT,
    `Price` INT,
    `current_order_id` INT,
    `address` varchar(500),
    `shipping_status` varchar(20) default "Shipping",
    `shippind_date` date,
    PRIMARY KEY (`Order_id`),
    FOREIGN KEY (Customer_ID)
        REFERENCES customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES product (Product_ID)
);

CREATE TABLE `shoppy`.`orders` (
    `Order_id` INT AUTO_INCREMENT,
    `Customer_ID` INT,
    `Quantity` INT,
    `Product_ID` INT,
    `Price` INT,
    `order_date` date,
    PRIMARY KEY (`Order_id`),
    FOREIGN KEY (Customer_ID)
        REFERENCES customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES product (Product_ID)
);
CREATE TABLE `shoppy`.`shipping` (
    `Shipping_id` INT AUTO_INCREMENT,
    `Order_id` INT,
    `address` varchar(500),
    `shipping_status` varchar(20) default "Shipping",
    PRIMARY KEY (`Shipping_id`),
    FOREIGN KEY (Order_id)
        REFERENCES orders (Order_id)
);

CREATE TABLE `shoppy`.`review_audit` (
  `Audit_ID`int AUTO_INCREMENT,
  `Review_ID` int,
  `Audit_status` varchar(20) default "Pending",
  PRIMARY KEY (`Audit_ID`),
  FOREIGN KEY (Review_ID) REFERENCES reviews(Review_ID)
);

