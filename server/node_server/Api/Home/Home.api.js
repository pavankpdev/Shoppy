/*
 * Prouduct API
 */

//  Libraries
const Router = require("express").Router();
const randomize = require("lodash/sampleSize");

// Configs
const { log4js } = require("../../config/logs.config");
const homeLogger = log4js.getLogger("home");

// Queries
const { getAllProducts } = require("../../Query/Home");

// @Route   GET /
// @des     GET all the list of products
// @access  PUBLIC
Router.get("/", async (_, res) => {
  try {
    // Get all product data
    const allProducts = await getAllProducts();

    const newArrivals = [
      ...randomize(
        allProducts.filter(({ Category }) => Category === "Home Appliances"),
        3
      ),
      ...randomize(
        allProducts.filter(
          ({ Category }) => Category === "Electricals & Electronics"
        ),
        3
      ),
      ...randomize(
        allProducts.filter(({ Category }) => Category === "Furniture"),
        3
      ),
      ...randomize(
        allProducts.filter(({ Category }) => Category === "Sports"),
        3
      ),
    ];

    return res.status(200).json({ allProducts, newArrivals });
  } catch (error) {
    homeLogger.error(error);
    return res.json({ error: error.message });
  }
});

module.exports = Router;
