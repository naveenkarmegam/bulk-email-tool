const setError = require("../helpers/customError.js");
const getDashboardInfo = require("../helpers/getDashboard.js");
const validateMongoDbId = require("../helpers/validateId.js");
const User = require("../model/user.model.js");

const updateUserProfile = async (req, res, next) => {
  try {
    const validateId = validateMongoDbId(req.params.id);
    if (!validateId) {
      return next(setError(400, "Invalid User Id"));
    }
    if (req.params.id !== req.user._id) {
      return next(setError(401, "You can update only your account!"));
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          profilePicture: req.body.profilePicture,
        },
      },
      {
        new: true,
      }
    );
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const validateId = validateMongoDbId(req.params.id);
    if (!validateId) {
      return next(setError(400, "Invalid User Id"));
    }
    if (req.params.id !== req.user._id) {
      return next(setError(401, "You can delete only your account!"));
    }
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted successfully");
  } catch (error) {
    next(error);
  }
};

const userDashBoardInfo = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const dashBoardInfo = await getDashboardInfo(_id);
    res.status(200).json(dashBoardInfo);
  } catch (error) {
    console.log(error)
    next(error);
  }
};
module.exports = { updateUserProfile, deleteUser, userDashBoardInfo };
