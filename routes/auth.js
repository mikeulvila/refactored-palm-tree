'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');

// model
const User = require('../models/users.js');

require('../controllers/auth.js');

//===============================================
//  User Auth Routes
//===============================================
router.get('/auth/soundcloud',
  passport.authenticate('soundcloud'));

router.get('/auth/soundcloud/callback',
  passport.authenticate('soundcloud', {
    failureRedirect: '/#/home',
    successRedirect: '/#/profile'
  }));

router.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/#/home');
});

// GET USER OBJECT
router.get('/user', (req, res) => {
  console.log('got user for client');
  res.json(req.user);
});

//===============================================
//  UPDATE PROFILE
//===============================================
router.post('/api/updateProfile', (req, res) => {
  console.log('updateProfile', req.body);
  res.sendStatus(200);
})


//  Simple route middleware to ensure user is authenticated.
//  Use this route middleware on any resource that needs to be protected.  If
//  the request is authenticated (typically via a persistent login session),
//  the request will proceed.  Otherwise, the user will be redirected to the
//  login page.
function ensureAuthenticated(req, res, next) {
  console.log('reqIsAuth', req);
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/#/signup')
}

module.exports = router;
