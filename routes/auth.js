'use strict';
const express = require('express');
const router = express.Router();
const passport = require('passport');

// model
const User = require('../models/User.js');

// controller
require('../controllers/authCtrl.js');

//===============================================
//  User Auth Routes
//===============================================

router.get('/auth/soundcloud',
  passport.authenticate('soundcloud'));

router.get('/auth/soundcloud/callback',
  passport.authenticate('soundcloud', {
    failureRedirect: '/#/',
    successRedirect: '/#/profile'
  }));

router.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/#/home');
});

//===============================================
//  UPDATE PROFILE
//===============================================
router.post('/api/updateProfile', (req, res) => {
  console.log('updateProfile', req.body);
  res.sendStatus(200);
})

module.exports = router;
