const joi = require("joi");

const templateValidationSchema = joi.object({
  title: joi.string().min(3).required().messages({
    "string.empty": "title cannot be empty",
    "string.min": "title must be at least {#limit} characters",
  }),
  subject: joi.string().min(3).required().messages({
    "string.empty": "subject cannot be empty",
    "string.min": "subject name must be at least {#limit} characters",
  }),
  content: joi.string().min(3).required().messages({
    "string.empty": "content cannot be empty",
    "string.min": "content must be at least {#limit} characters",
  }),
});

module.exports = { templateValidationSchema };
