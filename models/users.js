'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema
const userSchema = new Schema({
  _id: Number,
  access_token: String,
  displayName: String,
  joined_at: {
    type: Date,
    default: Date.now
  }
});

const User = module.exports = mongoose.model('Users', userSchema);
