/** @format */

// utils/validation.js

const Joi = require("joi");

const clientSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  // Agrega más campos según sea necesario
});

const validateClientData = (data) => {
  return clientSchema.validate(data);
};

module.exports = {
  validateClientData,
};
