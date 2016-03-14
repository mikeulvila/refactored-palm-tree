var express = require('express');
var router = express.Router();

// controller
const ctrl = require('../controllers/user.js');

/* GET users listing. */
router.post('/user/signup', ctrl.signup);

module.exports = router;
