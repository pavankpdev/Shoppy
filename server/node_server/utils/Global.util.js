const moment = require("moment");

// utility fuction to get current date or time
const getCurrentDateTime = (type) => {
  const current = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm:ss"),
  };

  return current[type];
};

module.exports = { getCurrentDateTime };
