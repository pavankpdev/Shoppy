// importing all the environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Initializing express application
const Shoppy = express();

// application middleware
Shoppy.use(helmet());
Shoppy.use(express.urlencoded({ extended: false }));
Shoppy.use(express.json());
Shoppy.use(cors());

// 404 route
Shoppy.get("/", (req, res) => {
  res.json({ error: "Invalid Route" });
});

// Specifying the port to run the server
const port = process.env.PORT;
Shoppy.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
