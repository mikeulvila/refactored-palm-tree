'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const _ = require('lodash');
// controller
const userCtrl = require('../controllers/userCtrl.js');
// MODEL
const User = require('../models/User.js');
// env
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET;

// GET     /forums              ->  index
// GET     /forums/new          ->  new
// POST    /forums              ->  create
// GET     /forums/:forum       ->  show
// GET     /forums/:forum/edit  ->  edit
// PUT     /forums/:forum       ->  update
// DELETE  /forums/:forum       ->  destroy

// get user by id
router.get('/user/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) throw err;
    res.json(user);
  });
});

// GET USER OBJECT
router.get('/user', ensureAuthenticated, (req, res) => {
  res.json(req.user);
});

// UPDATE USER OBJECT
router.put('/user/:id', (req, res) => {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, user) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  // else send 401 unauthorized
  res.status(401).json('Please connect with SoundCloud');
};

module.exports = router;
