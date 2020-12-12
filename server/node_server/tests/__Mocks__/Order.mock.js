const axios = require("axios");

const OrderApiSuccess = async () =>
  await axios.get("http://localhost:4000/orders/8");
const OrderApiError = async () =>
  await axios.get("http://localhost:4000/orders/dd8");
const OrderTrackingApiSuccess = async () =>
  await axios.get("http://localhost:4000/orders/track/23/1");
const OrderTrackingApiError = async () =>
  await axios.get("http://localhost:4000/orders/track/0d/11111d");

module.exports = {
  OrderApiSuccess,
  OrderApiError,
  OrderTrackingApiSuccess,
  OrderTrackingApiError,
};
