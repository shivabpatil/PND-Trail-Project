var mongoose = require('mongoose'),
	express = require('express');

var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

//set up the default environment as development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//databse connection
var db = mongoose.connection;

//initalize express module
var app = express();

//setup config using config.js
var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
//
require('./server/config/routes')(app, passport);

var strategy = new Auth0Strategy({
    domain:       process.env.AUTH0_DOMAIN,
    clientID:     process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:  process.env.AUTH0_CALLBACK_URL || 'http://localhost:8000/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.listen(config.port,function (err) {
	if (err) throw err;
	console.log('Server is running on port ',+config.port);
});
