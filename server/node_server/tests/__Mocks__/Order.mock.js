const axios = require("axios");

const OrderApiSuccess = async () =>
  await axios.get("https://shoppyapp.live/node/orders/8");
const OrderApiError = async () =>
  await axios.get("https://shoppyapp.live/node/orders/dd8");
const OrderTrackingApiSuccess = async () =>
  await axios.get("https://shoppyapp.live/node/orders/track/23/1");
const OrderTrackingApiError = async () =>
  await axios.get("https://shoppyapp.live/node/orders/track/0d/11111d");

module.exports = {
  OrderApiSuccess,
  OrderApiError,
  OrderTrackingApiSuccess,
  OrderTrackingApiError,
};
