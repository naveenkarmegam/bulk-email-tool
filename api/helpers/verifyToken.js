const { verify } = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, process.env.JWT_SECRTE_KEY, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = verifyToken;
