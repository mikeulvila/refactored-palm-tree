'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// message schema
const messageSchema = new Schema({
  user_1: Number,
  user_2: Number,
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
