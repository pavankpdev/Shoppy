const axios = require("axios");

const ProductApiSuccess = async () =>
  await axios.get("https://shoppyapp.live/node/products/p/38");
const ProductApiError = async () =>
  await axios.get("https://shoppyapp.live/node/products/p/123pavan");
const CategoryApiSuccess = async () =>
  await axios.get("https://shoppyapp.live/node/products/c/Sports");
const CategoryApiError = async () =>
  await axios.get("https://shoppyapp.live/node/products/c/pavan");

module.exports = {
  ProductApiSuccess,
  ProductApiError,
  CategoryApiSuccess,
  CategoryApiError,
};
