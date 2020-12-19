const axios = require("axios");

const ReviewApiSuccess = async () =>
  await axios.get("https://shoppyapp.live/node/review/2");

const ReviewApiError = async () =>
  await axios.get("https://shoppyapp.live/node/review/2562");

module.exports = { ReviewApiSuccess, ReviewApiError };
