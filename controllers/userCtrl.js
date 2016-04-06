'use strict';
const request = require('request');
const _ = require('lodash');
// MODEL
const User = require('../models/User.js');

module.exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  // else send 401 unauthorized
  res.status(401).json('Please connect with SoundCloud');
};

module.exports.getUser = (req, res) => {
  res.json(req.user);
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) throw err;
    res.json(user);
  });
};

module.exports.updateUser = (req, res) => {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, user) => {
    if (err) throw err;
    res.sendStatus(200);
  });
};



