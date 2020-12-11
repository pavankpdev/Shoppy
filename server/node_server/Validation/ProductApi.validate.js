// To simplify validation, Joi validation library will be utilized.
// Joi Documentation: https://hapi.dev/module/joi/
const Joi = require("joi");

// Validation of Customer Api
const validateProductApi = (productData) => {
  const schema = Joi.object({
    name: Joi.string().required().error(new Error("Name is required")),
    description: Joi.string()
      .required()
      .error(new Error("description is required")),
    price: Joi.number().required().error(new Error("price is required")),
    seller: Joi.string().required().error(new Error("seller is required")),
    category: Joi.string().required().error(new Error("category is required")),
    img1: Joi.string().required().error(new Error("img1 is required")),
    img2: Joi.string().required().error(new Error("img2 is required")),
  });
  return schema.validate(productData);
};

module.exports = {
  validateProductApi,
};
