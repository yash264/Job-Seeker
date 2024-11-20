const express = require('express');

const UserRoute = express.Router();

const { register, login } = require('../controller/User.controller');

UserRoute.post('/register', register);
UserRoute.post('/login', login);

module.exports = UserRoute ;