const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../users/model.js');

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

module.exports = router;
