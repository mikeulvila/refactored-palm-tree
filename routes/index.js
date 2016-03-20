'use strict'

const express = require('express');
const router = express.Router();

// require routes
const auth = require('./auth.js');
const user = require('./user.js');

// use routes
router.use(auth);
router.use('/api', user);

module.exports = router;
