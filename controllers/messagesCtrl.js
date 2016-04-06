'use strict';
// models
const Message = require('../models/Message.js');
const User = require('../models/User.js');

const _ = require('lodash');

module.exports.getMessage = (req, res) => {
  const message_id = parseInt(req.params.message_id);
  Message.findById(message_id, (err, message) => {
    if (err) throw err;
    if (message) {
      res.json(message);
    } else {
      res.json({newMsg: 'Start a new message with', message_id: message_id})
    }
  });
};

module.exports.postMessage = (req, res) => {
  // both id's are ints at this point
  const message_id = parseInt(req.params.message_id);

  const user_id = req.user._id;

  let cowriter_id = message_id.toString().split(user_id.toString());
  if (cowriter_id[0]) {
    cowriter_id = parseInt(cowriter_id[0]);
  } else if (cowriter_id[1]) {
    cowriter_id = parseInt(cowriter_id[1]);
  }

  const text = req.body.text;

  Message.findById(message_id, (err, message) => {
    if (err) throw err;

    if (message) {
      message.content.push({user_id: user_id, text: text});
      message.save();
      res.sendStatus(200);
    } else {
      const newMessage = new Message();
      newMessage._id = message_id;
      newMessage.users = [user_id, cowriter_id];
      newMessage.content = {
                            user_id: user_id,
                            text: text
                          };
      newMessage.save();
      User.findById(user_id, (err, user) => {
        user.messages.push(message_id);
        user.save();
      });
      User.findById(cowriter_id, (err, user) => {
        user.messages.push(message_id);
        user.save();
      });
      res.sendStatus(200);
    }
  });
};
