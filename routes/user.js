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

// GET USER OBJECT
router.get('/user', ensureAuthenticated, (req, res) => {
  res.json(req.user);
});

router.get('/user/tracks', ensureAuthenticated, (req, res) => {
  const lookupTracksAPI = req.user.tracks_uri + '?client_id=' + CLIENT_ID;
  // api request
  request.get(lookupTracksAPI, (err, response) => {
    if (err) {
      res.sendStatus(404);
    } else {
      let filteredTracksArray = [];
      const tracksArray = JSON.parse(response.body);
      _.forEach(tracksArray, (v) => {
        filteredTracksArray.push({
          id: v.id,
          title: v.title,
          user_id: v.user_id,
          uri: v.uri
        });
      });
      res.json(filteredTracksArray);
    }
  });
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
