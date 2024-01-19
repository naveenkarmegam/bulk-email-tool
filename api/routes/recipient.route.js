const express = require("express");
const {
  verifyTokenAuthentication,
} = require("../middlewares/authentication.js");
const joiValidation = require("../middlewares/joiValidation.js");
const {
  recipientsValidationSchema,
} = require("../validations/recipientValidationSchema.js");
const {
  addRecipient,
  updateRecipient,
  deleteRecipient,
  getRecipientByUser,
  getRecipientById,
} = require("../controllers/recipients.controller.js");

const router = express.Router();

router.post(
  "/add-recipient",
  verifyTokenAuthentication,
  joiValidation(recipientsValidationSchema),
  addRecipient
);
router.patch(
  "/update-recipient/:recipientId",
  verifyTokenAuthentication,
  updateRecipient
);
router.delete(
  "/delete-recipient/:recipientId",
  verifyTokenAuthentication,
  deleteRecipient
);
router.get(
  "/get-recipients-by-user",
  verifyTokenAuthentication,
  getRecipientByUser
);
router.get("/get-recipient/:recipientId", verifyTokenAuthentication, getRecipientById);

module.exports = router;
