// To simplify validation, Joi validation library will be utilized.
// Joi Documentation: https://hapi.dev/module/joi/
const Joi = require("joi");

// Validation of Tracking Api
const validateTrackingApi = (orderData) => {
  const schema = Joi.object({
    shipping_id: Joi.string()
      .required()
      .error(new Error("shipping_id is required")),
    customer_id: Joi.string()
      .required()
      .error(new Error("customer_id is required")),
  });
  return schema.validate(orderData);
};

// Validation of Get All Orders Api
const validateGetAllOrdersgApi = (orderData) => {
  const schema = Joi.object({
    customer_id: Joi.string()
      .required()
      .error(new Error("customer_id is required")),
  });
  return schema.validate(orderData);
};

module.exports = {
  validateGetAllOrdersgApi,
  validateTrackingApi,
};
