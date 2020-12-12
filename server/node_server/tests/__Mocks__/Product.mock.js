const axios = require("axios");

const ProductApiSuccess = async () =>
  await axios.get("http://localhost:4000/products/p/38");
const ProductApiError = async () =>
  await axios.get("http://localhost:4000/products/p/123pavan");
const CategoryApiSuccess = async () =>
  await axios.get("http://localhost:4000/products/c/Sports");
const CategoryApiError = async () =>
  await axios.get("http://localhost:4000/products/c/pavan");

module.exports = {
  ProductApiSuccess,
  ProductApiError,
  CategoryApiSuccess,
  CategoryApiError,
};
