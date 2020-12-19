const axios = require("axios");

const CustomerApiSuccess = async () => {
  const response = await axios.post("https://shoppyapp.live/node/customer", {
    data: { email: "pavankumar@gmail.com", fullname: "pavankumar" },
  });

  return response;
};

const CustomerApiEmailError = async () => {
  const response = await axios.post("https://shoppyapp.live/node/customer", {
    data: { fullname: "pavankumar" },
  });

  return response;
};

const CustomerApiFullnameError = async () => {
  const response = await axios.post("https://shoppyapp.live/node/customer", {
    data: { email: "pavankumar@gmail.com" },
  });

  return response;
};

module.exports = {
  CustomerApiSuccess,
  CustomerApiEmailError,
  CustomerApiFullnameError,
};
