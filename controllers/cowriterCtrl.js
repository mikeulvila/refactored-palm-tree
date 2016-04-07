'use strict';
const _ = require('lodash');

// Users model
const User = require('../models/User.js');

// find potential genre matching cowriters
module.exports.findCowriters = (req, res) => {
  const myGenres = req.user.genres;
  const myId = req.user._id;
  const queryArray = _(myGenres).pickBy((val) => {
    return val === true
  }).omit('$__isNested').map((v,k) => {
    const obj = {}

    obj[`genres.${k}`] = v
    return obj
  }).value();

  User.find({}, '_id genres strengths').or(queryArray).where('_id').ne(myId).exec((err, users) => {
    res.json(users);
  });
};

// like a cowriter
module.exports.likeCowriter = (req, res) => {
  const cowriter_id = parseInt(req.params.cowriter_id);
  const user_id = req.user._id;
  User.findById(user_id, (err, user) => {
    if (err) throw err;
    if (user.likes.indexOf(cowriter_id) === -1) {
      user.likes.push(cowriter_id);
      user.save();
    } else {
      return res.json({warning: 'You already like this cowriter.'});
    }
    User.findById(cowriter_id, (err, cowriter) => {
      if (err) throw err;
      if (cowriter.likes.indexOf(user_id) !== -1 && cowriter.matches.indexOf(user_id) === -1) {
        cowriter.matches.push(user_id);
        cowriter.save();
        user.matches.push(cowriter_id);
        user.save();
        res.json({
          msg: 'You have a match!',
          cowriterUsername: cowriter.username,
          avatar_url: cowriter.avatar_url,
          cowriter_id: cowriter_id,
          user_id: user_id
        });
      } else {
        res.sendStatus(200);
      }
    });
  });
};

// remove cowriter
module.exports.removeCowriter = (req, res) => {
  const cowriter_id = parseInt(req.params.cowriter_id);
  const user_id = req.user._id;
  User.findById(user_id, (err, user) => {
    console.log('user>>>>>', user);
    if (err) throw err;
    user.likes.pull(cowriter_id);
    user.matches.pull(cowriter_id);
    user.save();
    User.findById(cowriter_id, (err, cowriter) => {
      cowriter.matches.pull(user_id);
      cowriter.save();
      res.json(user);
    });
  });
};

