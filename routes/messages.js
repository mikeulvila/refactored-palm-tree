'use strict';
const express = require('express');
const router = express.Router();
const _ = require('lodash');
// controller
const messagesCtrl = require('../controllers/messagesCtrl.js');
// MODEL
const Message = require('../models/Message.js');

router.get('/message/:message_id', (req, res) => {
  console.log('message_id>>>', req.params.message_id);
  res.json(req.params);
})

module.exports = router;
