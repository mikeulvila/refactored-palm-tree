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

router.get('/cowriters/find', (req, res) => {
  const myGenres = req.user.genres;
  const myId = req.user._id;
  const queryArray = _(myGenres).pickBy((val) => {
    return val === true
  }).omit('$__isNested').map((v,k) => {
    const obj = {}

    obj[`genres.${k}`] = v
    return obj
  }).value();

  User.find({}, '_id genres strengths').or(queryArray).where('_id').ne(myId).exec((err, users) => {
    res.json(users);
  });
});

router.post('/cowriters/like/:cowriter_id', (req, res) => {
  const cowriter_id = req.params.cowriter_id;
  User.findById(req.user._id, (err, user) => {
    if (user.likes.indexOf(cowriter_id) === -1) {
      user.likes.push(cowriter_id);
      user.save();
    }
    User.findById(cowriter_id, (err, cowriter) => {
      if (cowriter.likes.indexOf(user._id) !== -1 && cowriter.matches.indexOf(user._id) === -1) {
        cowriter.matches.push(user._id);
        cowriter.save();
        user.matches.push(cowriter._id);
        user.save();
        res.json({msg: 'You have a match!'});
      } else {
        res.sendStatus(200);
      }
    });
  });
});

module.exports = router;
