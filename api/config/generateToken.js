const { sign } = require("jsonwebtoken");

const generateToken = (_id) => {
  return sign({ _id }, process.env.JWT_SECRTE_KEY, { expiresIn: "1d" });
};

module.exports = generateToken;
