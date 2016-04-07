'use strict';
const express = require('express');
const router = express.Router();
// controller
const ctrl = require('../controllers/cowriterCtrl.js');

router.get('/cowriters/find', ctrl.findCowriters);

router.post('/cowriters/like/:cowriter_id', ctrl.likeCowriter);

router.delete('/cowriters/remove/:cowriter_id', ctrl.removeCowriter);

module.exports = router;
