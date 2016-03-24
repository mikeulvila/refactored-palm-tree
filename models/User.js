'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
  _id: Number,
  access_token: String,
  refresh_token: String,
  permalink_url: String,
  username: String,
  description: String,
  avatar_url: String,
  city: String,
  state: String,
  country: String,
  user_uri: String,
  tracks_uri: String,
  likes: Array,
  matches: Array,
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
