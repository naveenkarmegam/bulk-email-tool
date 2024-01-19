const { Schema, model } = require("mongoose");

const RecipientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
RecipientSchema.index({ email: 1, userId: 1 }, { unique: true });

module.exports = model("Recipient", RecipientSchema);
