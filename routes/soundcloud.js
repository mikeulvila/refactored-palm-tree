'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');

// model
const User = require('../models/users.js');

require('../controllers/soundcloud.js');

// GET /auth/soundcloud
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in SoundCloud authentication will involve
//   redirecting the user to soundcloud.com.  After authorization, SoundCloud
//   will redirect the user back to this application at
//   /auth/soundcloud/callback
router.get('/auth/soundcloud',
  passport.authenticate('soundcloud'),
  function(req, res){
    console.log('hitting authenticate path');
    // The request will be redirected to SoundCloud for authentication, so this
    // function will not be called.
  });

// GET /auth/soundcloud/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/soundcloud/callback',
  passport.authenticate('soundcloud', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

module.exports = router;
