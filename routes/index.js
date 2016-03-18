'use strict'

const express = require('express');
const router = express.Router();

// require routes
const auth = require('./auth.js');

// use routes
router.use(auth);

module.exports = router;
