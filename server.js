var mongoose = require('mongoose'),
	express = require('express'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy; //passport has differernt strategies.stragtegies how passport does login

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//databse connection

var db = mongoose.connection;

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);

// var User = require('./server/models/userModel');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


// var User = mongoose.model('User');
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });

// passport.use(new LocalStrategy({
//         usernameField: 'username',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//     function(req, username, password, done) {
//         process.nextTick(function() {
//             User.findOne({ 'username': username, 'password': password }, function(err, user) {
//
//                 if (err)
//                     return done(err);
//
//                 if (!user)
//                     return done(null,false,{message:'Invalide username or password'});
//
//                 return done(null, user);
//
//             })
//         })
    // }));
// app.post('/login', function(req, res, next) {
// 		console.log('inside login post')
//     passport.authenticate('local', function(err, user, info) {
//     	if(err)
//     		return  res.status(500).send('error1')
//
//         if (user === false) {
//           res.status(500).send('error2')
//         } else {
//           res.status(200).send('succsess')
//         }
//     })(req, res, next);
// });

require('./server/config/routes')(app, passport);

app.listen(config.port,function () {
	console.log('Server is running on port',+config.port);
});
