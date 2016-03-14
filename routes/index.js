'use strict'

const express = require('express');
const router = express.Router();

// require routes
const user = require('./user');

// use routes
router.use(user);

module.exports = router;
