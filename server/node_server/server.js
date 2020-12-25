// importing all the environment variables
require("dotenv").config();

// Libraries
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// DB connection instance
const { mysqlConnection } = require("./database");

// importing microservices route
const Home = require("./Api/Home/Home.api");
const Products = require("./Api/Products/Products.api");
const Orders = require("./Api/Orders/Orders.api");
const Customer = require("./Api/Customer/Customer.api");
const Reviews = require("./Api/Reviews/Review.api");
const Admin = require("./Api/Admin/Admin.api");

// Establishing DB connection
mysqlConnection.connect((error) => {
  if (error) console.log(error);
  else console.log("Connected to DB");
});

// Initializing express application
const Shoppy = express();

// application middleware
Shoppy.use(helmet());
Shoppy.use(express.urlencoded({ extended: false }));
Shoppy.use(express.json());
Shoppy.use(cors());

// Initializing microservices route
Shoppy.use("/", Home);
Shoppy.use("/products", Products);
Shoppy.use("/orders", Orders);
Shoppy.use("/customer", Customer);
Shoppy.use("/review", Reviews);
Shoppy.use("/admin", Admin);

// 404 route
Shoppy.get("*", (req, res) => {
  res.json({ error: "Invalid Route" });
});

// Specifying the port to run the server
const port = process.env.PORT || 4000;
Shoppy.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
