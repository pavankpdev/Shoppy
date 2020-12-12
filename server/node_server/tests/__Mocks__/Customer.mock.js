const axios = require("axios");

const CustomerApiSuccess = async () => {
  const response = await axios.post("http://localhost:4000/customer", {
    data: { email: "pavankumar@gmail.com", fullname: "pavankumar" },
  });

  return response;
};

const CustomerApiEmailError = async () => {
  const response = await axios.post("http://localhost:4000/customer", {
    data: { fullname: "pavankumar" },
  });

  return response;
};

const CustomerApiFullnameError = async () => {
  const response = await axios.post("http://localhost:4000/customer", {
    data: { email: "pavankumar@gmail.com" },
  });

  return response;
};

module.exports = {
  CustomerApiSuccess,
  CustomerApiEmailError,
  CustomerApiFullnameError,
};
