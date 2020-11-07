/*
shoppy sql code

mysql v5.7
*/ 

CREATE TABLE `shoppy`.`Customer` (
  `Customer_ID` int,
  `Fullname` varchar(100),
  `Address` varchar(200),
  `City` varchar(50),
  `Zip` int,
  `Phone` int,
  PRIMARY KEY (`Customer_ID`)
);
CREATE TABLE `shoppy`.`Product` (
  `Product_ID` int,
  `Product_name` varchar(200),
  `Product_description`varchar(500),
  `Product_Price` int,
  `Seller` varchar(100),
  `Category` varchar(100),
  PRIMARY KEY (`Product_ID`)
);

CREATE TABLE `Reviews` (
  `Review_ID`int,
  `Customer_ID` int,
  `Product_ID` int,
  `Rating` int,
  `Review_desc` varchar(500),
  PRIMARY KEY (`Review_ID`),
  FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID),
  FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID)
);


CREATE TABLE `Shipping` (
  `Shipping_ID`int,
  `Product_ID` int,
  `Customer_ID` int,
  `Address` varchar(200),
  `Payment_ID` int,
  `Paymode` varchar(50),
  PRIMARY KEY (`Shipping_ID`),
  FOREIGN KEY (Customer_ID)
        REFERENCES Customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES Product (Product_ID)
);

CREATE TABLE `Orders` (
    `Order_id` INT,
    `Customer_ID` INT,
    `Shipping_ID` INT,
    `Payment_ID` INT,
    `Date` DATE,
    `Price` INT,
    `Product_ID` INT,
    PRIMARY KEY (`Order_id`),
    FOREIGN KEY (Customer_ID)
        REFERENCES Customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES Product (Product_ID),
    FOREIGN KEY (Shipping_ID)
        REFERENCES Shipping (Shipping_ID)
);



CREATE TABLE `Support` (
    `Support_ID` INT,
    `Date` DATE,
    `Subject` VARCHAR(200),
    `Description` VARCHAR(500),
    `Customer_ID` INT,
    `Product_ID` INT,
    PRIMARY KEY (`Support_ID`),
    FOREIGN KEY (Customer_ID)
        REFERENCES Customer (Customer_ID),
    FOREIGN KEY (Product_ID)
        REFERENCES Product (Product_ID)
);

ALTER TABLE `shipping`
ADD `Order_id` INT,
ADD FOREIGN KEY (Order_id) REFERENCES Orders(Order_id);