'use strict';
const express = require('express');
const router = express.Router();

// controller
const userCtrl = require('../controllers/userCtrl.js');
// MODEL
const User = require('../models/User.js');

// GET     /forums              ->  index
// GET     /forums/new          ->  new
// POST    /forums              ->  create
// GET     /forums/:forum       ->  show
// GET     /forums/:forum/edit  ->  edit
// PUT     /forums/:forum       ->  update
// DELETE  /forums/:forum       ->  destroy

// GET USER OBJECT
router.get('/user', ensureAuthenticated, function (req, res) {
  res.json(req.user);
});

// UPDATE USER OBJECT
router.put('/user/:id', (req, res) => {
  User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, user) => {
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
