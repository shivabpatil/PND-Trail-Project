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
//mongoose.Promise = global.Promise;



// var User = mongoose.model('User');

// passport.use('local',new LocalStrategy(
// 		function(username,password,done){
// 			console.log(username);
// 			User.findOne({username:username},function(err,user){
// 				console.log(user);
// 				if(err){
// 					return done(err);
// 				}
// 				if(!user){
// 					return done(null,false);
// 				}
// 				if(user){
// 					return done(null,done);
// 				}
// 			});
// 		}
// 	));
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

require('./server/config/routes')(app);

app.listen(config.port,function () {
	console.log('Server is running on port',+config.port);
});