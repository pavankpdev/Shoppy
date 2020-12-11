// To simplify validation, Joi validation library will be utilized.
// Joi Documentation: https://hapi.dev/module/joi/
const Joi = require("joi");

// Validation of Customer Api
const validateReviewApi = (reviewData) => {
  const schema = Joi.object({
    rating: Joi.number().required().error(new Error("rating is required")),
    review: Joi.string().required().error(new Error("seller is required")),
    subject: Joi.string().required().error(new Error("category is required")),
  });
  return schema.validate(reviewData);
};

module.exports = {
  validateReviewApi,
};
