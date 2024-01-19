const setError = require("../helpers/customError");

const joiValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(setError(400,error.details[0].message))
    }
    next();
  };
};

module.exports = joiValidation;
