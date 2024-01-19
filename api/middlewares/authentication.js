const setError = require("../helpers/customError.js");
const validateMongoDbId = require("../helpers/validateId.js");
const verifyToken = require("../helpers/verifyToken.js");

const verifyTokenAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.access_token
    if (!token) {
      return next(setError(401,'you need to login'))
    }
    const user = await verifyToken(token);
    const validateId = validateMongoDbId(user._id)
    if(!validateId) {
        return next(setError(400, 'Invalid user ID'));
    }
    req.user = user;
    next();
  } catch (error) {
    next(error)
  }
};

module.exports = { verifyTokenAuthentication };