const joi = require("joi");

const registerValidationSchema = joi.object({
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
  password: joi
    .string()
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
    }),
  cpassword: joi.string().valid(joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
  }),
});

const loginValidationSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.email": "Invalid email address",
    "string.empty": "Email cannot be empty",
  }),
  password: joi
    .string()
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
    }),
});
module.exports = { registerValidationSchema, loginValidationSchema };
