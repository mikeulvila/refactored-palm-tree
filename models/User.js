'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema
const userSchema = new Schema({
  _id: Number,
  access_token: String,
  refresh_token: String,
  full_name: String,
  description: String,
  avatar_url: String,
  city: String,
  country: String,
  uri: String,
  genres: {
    pop: Boolean,
    rock: Boolean,
    latin: Boolean,
    jazz: Boolean,
    blues: Boolean,
    country: Boolean,
    dance: Boolean,
    rap: Boolean,
    folk: Boolean,
    classical: Boolean
  },
  strengths: {
    lyrics: Number,
    melody: Number,
    music: Number
  },
  joined_at: {
    type: Date,
    default: Date.now
  }
});

const User = module.exports = mongoose.model('Users', userSchema);
