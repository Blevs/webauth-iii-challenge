const jwt = require('jsonwebtoken');
const secrets = require('../secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, secrets.jwt, (err, decodedToken) => {
    if (err) {
      res.status(401).json({message: "You shall not pass!"});
    } else {
      req.token = decodedToken;
      next();
    }
  });
};
