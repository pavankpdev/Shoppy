const axios = require("axios");

const ReviewApiSuccess = async () =>
  await axios.get("http://localhost:4000/review/2");

const ReviewApiError = async () =>
  await axios.get("http://localhost:4000/review/2");

module.exports = { ReviewApiSuccess, ReviewApiError };
