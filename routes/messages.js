'use strict';
const express = require('express');
const router = express.Router();
// controller
const ctrl = require('../controllers/messagesCtrl.js');

router.get('/message/:message_id', ctrl.getMessage);

router.post('/message/:message_id', ctrl.postMessage);

module.exports = router;
