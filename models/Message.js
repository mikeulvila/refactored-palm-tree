'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// message schema
const messageSchema = new Schema({
  _id: Number, // user1_id + user2_id
  users: [Number],
  user_1_message: [{
    user_id: Number,
    message: String,
    read: Boolean,
    sent_at: {
      type: Date,
      default: Date.now
    }
  }],
  user_2_message: [{
    user_id: Number,
    message: String,
    read: Boolean,
    sent_at: {
      type: Date,
      default: Date.now
    }
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Messages = module.exports = mongoose.model('Messages', messageSchema);
