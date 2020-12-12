const axios = require("axios");

const HomeApiSuccess = async () => await axios.get("http://localhost:4000/");

module.exports = { HomeApiSuccess };
