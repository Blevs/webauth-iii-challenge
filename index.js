const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth/routes.js');
const usersRoutes = require('./users/routes.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/users', usersRoutes);
server.use('/api', authRoutes);

server.listen(4000, () => console.log("server on port 4000"));
