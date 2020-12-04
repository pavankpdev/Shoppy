/*
shoppy sql code

mysql v5.7
*/ 

CREATE DATABASE IF NOT EXISTS shoppy;

CREATE TABLE `shoppy`.`customer` (
  `Customer_ID` int AUTO_INCREMENT,
  `Fullname` varchar(100),
  `Email` varchar(200), 
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
  PRIMARY KEY (`Review_ID`),
  FOREIGN KEY (Customer_ID) REFERENCES customer(Customer_ID),
  FOREIGN KEY (Product_ID) REFERENCES product(Product_ID)
);

CREATE TABLE `shoppy`.`orders` (
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
        REFERENCES product (Product_ID),
    
);

