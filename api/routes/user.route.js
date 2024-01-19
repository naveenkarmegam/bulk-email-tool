const express = require("express");
const {
  verifyTokenAuthentication,
} = require("../middlewares/authentication.js");
const {
  updateUserProfile,
  deleteUser,
  userDashBoardInfo,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.patch(
  "/updateProfile/:id",
  verifyTokenAuthentication,
  updateUserProfile
);
router.delete("/deleteUser/:id", verifyTokenAuthentication, deleteUser);

router.get("/dashBoardInfo", verifyTokenAuthentication, userDashBoardInfo);
module.exports = router;
