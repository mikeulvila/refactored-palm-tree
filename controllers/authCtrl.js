'use strict';
const passport = require('passport');
const SoundCloudStrategy = require('passport-soundcloud').Strategy;
// Users model
const User = require('../models/User.js');
// env variables to keep secret
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
const CLIENT_SECRET = process.env.SOUNDCLOUD_CLIENT_SECRET;
const HOST = process.env.PROD_HOST || 'http://127.0.0.1:3000'
const CALLBACK_URL = HOST + '/auth/soundcloud/callback';
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
    callbackURL: CALLBACK_URL
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
            newUser._id = soundCloudProfile.id;
            newUser.access_token = accessToken;
            newUser.refresh_token = refreshToken;
            newUser.permalink_url = soundCloudProfile.permalink_url;
            newUser.username = soundCloudProfile.username;
            newUser.description = soundCloudProfile.description;
            newUser.avatar_url = soundCloudProfile.avatar_url;
            newUser.city = soundCloudProfile.city;
            newUser.country = soundCloudProfile.country;
            newUser.user_uri = soundCloudProfile.uri;
            newUser.tracks_uri = soundCloudProfile.uri + '/tracks';

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
