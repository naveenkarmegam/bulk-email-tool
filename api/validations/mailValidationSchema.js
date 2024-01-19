const joi = require('joi');

const sendBulkMailSchema = joi.object({
  recipients: joi.array()
    .items(joi.string().email().required())
    .required()
    .messages({
      "string.email": "Invalid email address in recipients",
      "array.required": "Recipients cannot be empty",
    }),
  subject: joi.string()
    .required()
    .messages({
      "string.empty": "Subject cannot be empty",
    }),
  content: joi.string()
    .required()
    .messages({
      "string.empty": "Body of the mail cannot be empty",
    }),
});

module.exports = { sendBulkMailSchema };
