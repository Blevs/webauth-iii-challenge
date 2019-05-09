const express = require('express');
const authRoutes = require('./auth/routes.js');
const usersRoutes = require('./users/routes.js');

const server = express();

server.use(express.json());

server.use('/api/users', usersRoutes);
server.use('/api', authRoutes);

server.listen(4000, () => console.log("server on port 4000"));
