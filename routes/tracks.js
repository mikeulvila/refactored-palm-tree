'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const _ = require('lodash');
// controller
const userCtrl = require('../controllers/tracksCtrl.js');
// MODEL
const User = require('../models/User.js');
// env
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET;

router.get('/tracks', (req, res) => {
  User.find().select('tracks_uri').exec((err, tracks) => {
    console.log('tracks_uri', tracks);
  })
})

module.exports = router;
