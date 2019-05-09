const express = require('express');
const Users = require('./model.js');
const protected = require('../auth/protected-middleware.js');

const router = express.Router();

router.get('/', protected, (req, res) => {
  Users.get()
    .then(users =>
          // users.forEach(u => u.password = undefined) ||
          res.status(200).json(users))
    .catch(() => res.status(500).json({
      message: "Error fetching users"
    }));
});

module.exports = router;
