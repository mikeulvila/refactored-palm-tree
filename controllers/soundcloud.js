'use strict';
const passport = require('passport');
const SoundCloudStrategy = require('passport-soundcloud').Strategy;
// Users model
const User = require('../models/users.js');

const SOUNDCLOUD_CLIENT_ID = "078a10b8de37bb1ec1013502e17a8a95";
const SOUNDCLOUD_CLIENT_SECRET = "2cf9ad5cb917379303e01bbc5864a01a";

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete SoundCloud profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the SoundCloudStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and SoundCloud
//   profile), and invoke a callback with a user object.
passport.use(new SoundCloudStrategy({
    clientID: SOUNDCLOUD_CLIENT_ID,
    clientSecret: SOUNDCLOUD_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/soundcloud/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's SoundCloud profile is returned
      // to represent the logged-in user.  In a typical application, you would
      // want to associate the SoundCloud account with a user record in your
      // database, and return that user instead.
      return done(null, profile);
    });
  }
));
module.exports.signup = function (req, res) {
  console.log('req.body>>>', req.body);
   /* body... */
};
