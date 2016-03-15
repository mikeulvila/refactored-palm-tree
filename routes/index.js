'use strict'

const express = require('express');
const router = express.Router();

// require routes
const soundcloud = require('./soundcloud.js');

// use routes
router.use(soundcloud);

module.exports = router;
