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
    pop: {type:Boolean,default:false},
    rock: {type:Boolean,default:false},
    latin: {type:Boolean,default:false},
    jazz: {type:Boolean,default:false},
    blues: {type:Boolean,default:false},
    country: {type:Boolean,default:false},
    dance: {type:Boolean,default:false},
    rap: {type:Boolean,default:false},
    folk: {type:Boolean,default:false},
    classical: {type:Boolean,default:false}
  },
  strengths: {
    lyrics: Number,
    melody: Number,
    music: Number
  },
  joined_at: {
    type: Date,
    default: Date.now
  },
  messages: [Number]
});

const User = module.exports = mongoose.model('Users', userSchema);
