'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// message schema
const messageSchema = new Schema({
  _id: Number, // user1_id + user2_id
  users: Array,
  content: [{
    user_id: Number,
    text: String,
    unread: {
        type: Boolean,
        default: true
    },
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

const Message = module.exports = mongoose.model('Messages', messageSchema);
