'use strict';
const express = require('express');
const router = express.Router();
const _ = require('lodash');
// controller
const messagesCtrl = require('../controllers/messagesCtrl.js');
// MODEL
const Message = require('../models/Message.js');

router.get('/message/:message_id', (req, res) => {
  const message_id = parseInt(req.params.message_id);
  Message.findById(message_id, (err, message) => {
    if (err) throw err;
    if (message) {
      console.log('found message')
      res.json(message);
    } else {
      console.log('did not find message')
      res.json({newMsg: 'Start a new message with', message_id: message_id})
    }
  })
});

router.post('/message/:message_id', (req, res) => {
  console.log('req.body>>>>', req.body);
})

module.exports = router;
