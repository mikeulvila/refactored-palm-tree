'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const _ = require('lodash');
// controller
const cowriterCtrl = require('../controllers/cowriterCtrl.js');
// MODEL
const User = require('../models/User.js');
// env
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET;

router.get('/cowriters', (req, res) => {
  const myGenres = req.user.genres;
  const myId = req.user._id;
  const queryArray = _(myGenres).pickBy((val) => {
    return val === true
  }).omit('$__isNested').map((v,k) => {
    const obj = {}

    obj[`genres.${k}`] = v
    return obj
  }).value();

  User.find({}, '_id tracks_uri strengths').or(queryArray).where('_id').ne(myId).exec((err, users) => {
    res.json(users);
  });
})

[{classical: true}, {rock: true}]

module.exports = router;
