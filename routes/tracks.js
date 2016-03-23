'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const _ = require('lodash');
// controller
const tracksCtrl = require('../controllers/tracksCtrl.js');
// MODEL
const User = require('../models/User.js');
// env
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET;

router.get('/tracks/:user_id', (req, res) => {
  const id = req.params.user_id;
  console.log('req.params.tracks_uri>>>>>', req.params.user_id)
  const getTracksUrl = 'https://api.soundcloud.com/users/'+id+'/tracks?client_id=' + CLIENT_ID;
  // api request
  request.get(getTracksUrl, (err, tracks) => {
    if (err) {
      res.sendStatus(404);
    } else {
      let userTracksArray = [];
      const tracksArray = JSON.parse(tracks.body);
      _.forEach(tracksArray, (v) => {
        userTracksArray.push({
          id: v.id,
          title: v.title,
          user_id: v.user_id,
          uri: v.uri
        });
      });
      res.json(userTracksArray);
    }
  });
});






module.exports = router;
