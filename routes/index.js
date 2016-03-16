'use strict'

const express = require('express');
const router = express.Router();

// require routes
const user = require('./user.js');

// use routes
router.use(user);

module.exports = router;
