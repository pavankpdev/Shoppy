const axios = require("axios");

const HomeApiSuccess = async () => await axios.get("https://shoppyapp.live/node/");

module.exports = { HomeApiSuccess };
