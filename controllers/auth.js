'use strict';
const passport = require('passport');
const SoundCloudStrategy = require('passport-soundcloud').Strategy;
// Users model
const User = require('../models/users.js');
// env variables to keep secret
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET;

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// soundcloud strategy for passport
passport.use(new SoundCloudStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/soundcloud/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    const soundCloudProfile = profile._json;
    console.log('profile>>>', soundCloudProfile);
    // asynchronous verification
    process.nextTick(function () {
      // find user in database from soundcloud id
      User.findOne({'_id': profile.id}, (err, user) =>{
        if (err)
          return done(err);
        if (user) {
          return done(null, user); //user found
        } else {
          // create new user if not found
          const newUser = new User();
            newUser._id = profile.id;
            newUser.access_token = accessToken;
            newUser.displayName = profile.displayName;
            // save new user to database
            newUser.save((err, user) => {
              if (err) throw err;
              // successful return new user
              return done(null, user);
            });
          }
      });
    });
  }
));
