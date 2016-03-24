'use strict';
const express = require('express');
const router = express.Router();
const _ = require('lodash');
// controller
const messagesCtrl = require('../controllers/messagesCtrl.js');
// MODEL
const Message = require('../models/Message.js');
