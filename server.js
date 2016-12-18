var mongoose = require('mongoose'),
	express = require('express'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy; //passport has differernt strategies.

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//databse connection 

var db = mongoose.connection;

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
//mongoose.Promise = global.Promise;


//implement local strategy 
// var User = require('./server/models/userModel');
// console.log(User);
// passport.use(new LocalStrategy(
// 	function(userName,passowrd,done){
// 		console.log(userName);
// 		User.findOne({userName:userName}).exec(function(error,user){
// 			if(user){
// 				return done(null,user);
// 			}
// 			else{
// 				return done(null,false);
// 			}
// 		})
// 	})
// );

// passport.serializeUser(function(user,done){
// 	if(user){
// 		done(null,user._id);
// 	}
// });

// passport.deserializeUser(function(id,done){
// 	User.findOne({_id:id}).exec(function(error,user){
// 		if(user){
// 			return done(null,user);
// 		}
// 		else{
// 			return done(null,false);
// 		}
// 	});
// });

require('./server/config/routes')(app);

app.listen(config.port,function () {
	console.log('Server is running on port',+config.port);
});