/*
shoppy sql code

mysql v5.7
*/ 

CREATE DATABASE IF NOT EXISTS shoppy;

CREATE TABLE `shoppy`.`customer` (
  `Customer_ID` int AUTO_INCREMENT,
  `Fullname` varchar(100),
  `Address` varchar(200),
  `City` varchar(50),
  `Zip` int,
  `Phone` int,
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


CREATE TABLE `shoppy`.`shipping` (
  `Shipping_ID`int AUTO_INCREMENT,
  `Product_ID` int,
  `Customer_ID` int,
  `Address` varchar(200),
  `Payment_ID` int,
  `Paymode` varchar(50),
  PRIMARY KEY (`Shipping_ID`),
  FOREIGN KEY (Customer_ID)
        REFERENCES customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES product (Product_ID)
);

CREATE TABLE `shoppy`.`orders` (
    `Order_id` INT AUTO_INCREMENT,
    `Customer_ID` INT,
    `Shipping_ID` INT,
    `Payment_ID` INT,
    `Date` DATE,
    `Price` INT,
    `Product_ID` INT,
    PRIMARY KEY (`Order_id`),
    FOREIGN KEY (Customer_ID)
        REFERENCES customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES product (Product_ID),
    FOREIGN KEY (Shipping_ID)
        REFERENCES shipping (Shipping_ID)
);



CREATE TABLE `shoppy`.`support` (
    `Support_ID` INT AUTO_INCREMENT,
    `Date` DATE,
    `Subject` VARCHAR(200),
    `Description` VARCHAR(500),
    `Customer_ID` INT,
    `Product_ID` INT,
    PRIMARY KEY (`Support_ID`),
    FOREIGN KEY (Customer_ID)
        REFERENCES customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES product (Product_ID)
);

ALTER TABLE `shoppy`.`shipping`
ADD `Order_id` INT,
ADD FOREIGN KEY (Order_id) REFERENCES orders(Order_id);