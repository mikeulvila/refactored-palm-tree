'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// message schema
const messageSchema = new Schema({
  _id: Number, // user1_id + user2_id
  usernames: [String],
  content: [{
    user_id: Number,
    username: String,
    body: String,
    read: {
        type: Boolean,
        default: false
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

const Messages = module.exports = mongoose.model('Messages', messageSchema);
