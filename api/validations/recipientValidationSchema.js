const joi = require("joi");

const recipientsValidationSchema = joi.object({
    firstName: joi.string().min(3).max(15).required().messages({
      "string.empty": "First name cannot be empty",
      "string.min": "First name must be at least {#limit} characters",
      "string.max": "First name must not exceed {#limit} characters",
    }),
    lastName: joi.string().min(3).max(15).required().messages({
      "string.empty": "Last name cannot be empty",
      "string.min": "Last name must be at least {#limit} characters",
      "string.max": "Last name must not exceed {#limit} characters",
    }),
    email: joi.string().email().required().messages({
      "string.email": "Invalid email address",
      "string.empty": "Email cannot be empty",
    }),
})

module.exports ={recipientsValidationSchema}