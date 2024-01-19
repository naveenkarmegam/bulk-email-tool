const { Schema, model } = require("mongoose");
const Joi = require("joi");

const mailSchema = new Schema(
  {
    recipients: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return isValidRecipients(value);
        },
        message: "Invalid email format in recipients array",
      },
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

function isValidRecipients(recipients) {
  const schema = Joi.array().items(Joi.string().email());
  const { error } = schema.validate(recipients);
  return !error;
}

module.exports = model("Mail", mailSchema);
