'use strict';

const mongoose = require('mongoose');

// mongoose schema
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  passhash: String,
  joined_at: {
    type: Date,
    default: Date.now
  }
});

const User = module.exports = mongoose.model('Users', userSchema);
