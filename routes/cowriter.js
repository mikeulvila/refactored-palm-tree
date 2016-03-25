'use strict';
const express = require('express');
const router = express.Router();
// controller
const ctrl = require('../controllers/cowriterCtrl.js');
// MODEL
const User = require('../models/User.js');
// env
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET;

router.get('/cowriters/find', ctrl.findCowriters);

router.post('/cowriters/like/:cowriter_id', ctrl.likeCowriter);

module.exports = router;
