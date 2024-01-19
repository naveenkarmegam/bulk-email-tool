const express = require("express");

//middlewares
const joiValidation = require("../middlewares/joiValidation.js");
const {
  registerValidationSchema,
  loginValidationSchema,
} = require("../validations/userValidationSchema.js");

//controller
const {
  userRegistration,
  logInWithGoogle,
  activateAccount,
  userLogin,
  userLogout,
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.post(
  "/register",
  joiValidation(registerValidationSchema),
  userRegistration
);
router.get("/activate-account/:token", activateAccount);
router.post("/login", joiValidation(loginValidationSchema), userLogin);
router.post("/login-with-google", logInWithGoogle);
router.get("/logout", userLogout);

module.exports = router;
