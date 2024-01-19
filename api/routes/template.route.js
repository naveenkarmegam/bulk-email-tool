const express = require("express");
const {
  verifyTokenAuthentication,
} = require("../middlewares/authentication.js");
const {
  addTemplate,
  updateTemplate,
  deleteTemplate,
  getTemplateByUserId,
  getTemplateById,
} = require("../controllers/template.controller.js");
const joiValidation = require("../middlewares/joiValidation.js");
const {
  templateValidationSchema,
} = require("../validations/templateValidationSchema.js");

const router = express.Router();

router.post(
  "/add-template",
  verifyTokenAuthentication,
  joiValidation(templateValidationSchema),
  addTemplate
);
router.patch(
  "/update-template/:templateId",
  verifyTokenAuthentication,
  updateTemplate
);
router.delete(
  "/delete-template/:templateId",
  verifyTokenAuthentication,
  deleteTemplate
);
router.get(
  "/get-template-by-user",
  verifyTokenAuthentication,
  getTemplateByUserId
);
router.get(
  "/get-template/:templateId",
  verifyTokenAuthentication,
  getTemplateById
);

module.exports = router;
