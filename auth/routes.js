const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../users/model.js');
const jwt = require('jsonwebtoken');
const secrets = require('../secrets.js');

const router = express.Router();

router.post('/register', (req, res) => {
  const user = req.body;
  if (user && user.username && user.password && user.department) {
    user.password = bcrypt.hashSync(user.password, 10);
    Users.add(user)
      .then(user => (user.password = undefined) || res.status(201).json(user))
      .catch(error => res.status(500).json({
        message: "Error registering user",
        error
      }));
  } else {
    res.status(400).json({
      message: "Requires username, password and department"
    });
  }
});

router.post('/login', (req, res) => {
  const creds = req.body;
  if (creds && creds.username && creds.password) {
    Users.getBy({username: creds.username})
      .then(([user]) => {
        if (user && bcrypt.compareSync(creds.password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({token});
        } else {
          res.status(401).json({
            message: "Invalid credentials"
          });
        }
      })
      .catch(error => res.status(500).json({
        message: "Error logging in",
        error
      }));
  } else {
    res.status(400).json({
      message: "Requires username and password"
    });
  }
});

function generateToken(user) {
  user.password = undefined;
  const payload = user;
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, secrets.jwt, options);
}


module.exports = router;
