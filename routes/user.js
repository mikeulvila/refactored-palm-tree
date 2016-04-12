'use strict';
const express = require('express');
const router = express.Router();
// controller
const ctrl = require('../controllers/userCtrl.js');

// GET USER OBJECT
router.get('/user', ctrl.ensureAuthenticated, ctrl.getUser);

// get user by id
router.get('/user/:id', ctrl.getUserById);

// get username
router.get('/user/username/:id', ctrl.getUsername);

// UPDATE USER OBJECT
router.put('/user/:id', ctrl.updateUser);

module.exports = router;
