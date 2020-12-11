// To simplify validation, Joi validation library will be utilized.
// Joi Documentation: https://hapi.dev/module/joi/
const Joi = require("joi");

// Validation of Customer Api
const validateCustomerApi = (customerData) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required()
      .error(new Error("Email is required")),
    fullname: Joi.string().required().error(new Error("Fullname is required")),
  });
  return schema.validate(customerData);
};

module.exports = {
  validateCustomerApi,
};
