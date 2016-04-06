'use strict';
const express = require('express');
const router = express.Router();
// controller
const ctrl = require('../controllers/tracksCtrl.js');

router.get('/tracks/:user_id', ctrl.getTracks);

module.exports = router;
