//  The log4js library will be utilized as default logging system for wired station.
// log4js documentation https://www.npmjs.com/package/log4js

const log4js = require("log4js");

// configuring log4js for file based logging

log4js.configure({
  appenders: {
    app: { type: "file", filename: "./logs/app.log" },
    products: { type: "file", filename: "./logs/products.log" },
  },
  categories: {
    default: { appenders: ["app"], level: "debug" },
    products: { appenders: ["products"], level: "debug" },
  },
});

exports.log4js = log4js;
