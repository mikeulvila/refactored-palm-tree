'use strict'

const express = require('express');
const router = express.Router();

// require routes
const auth = require('./auth.js');
const cowriter = require('./cowriter.js');
const tracks = require('./tracks.js');
const user = require('./user.js');

// use routes
router.use(auth);
router.use('/api', cowriter);
router.use('/api', tracks);
router.use('/api', user);

module.exports = router;
