'use strict';
const express = require('express');
const router = express.Router();

// controller
const userCtrl = require('../controllers/userCtrl.js');

// GET     /forums              ->  index
// GET     /forums/new          ->  new
// POST    /forums              ->  create
// GET     /forums/:forum       ->  show
// GET     /forums/:forum/edit  ->  edit
// PUT     /forums/:forum       ->  update
// DELETE  /forums/:forum       ->  destroy

// GET USER OBJECT
router.get('/user', ensureAuthenticated, function (req, res) {
  console.log('req.user>>>', req.user);
  res.json(req.user);
});

function ensureAuthenticated (req, res, next) {
  console.log('got to ensureAuthenticated')
  if (req.isAuthenticated()) {
    console.log('getting through Authenticated')
    return next();
  } else {
    console.log('got to else redirect')
    res.redirect('/#/');
  }
}

module.exports = router;
