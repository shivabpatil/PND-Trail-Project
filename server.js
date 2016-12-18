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

// var Account = require('./server/models/accountModel');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

var User = mongoose.model('User');

passport.use(new LocalStrategy(
	function(username,passowrd,done){
		process.nextTick(function() {
	    User.findOne({username:username}, function(err, user) {
	      if (err) {
	        return done(err);
	      }

	      if (!user) {
	        return done(null, false);
	      }

	      // if (user.password != password) {
	      //   return done(null, false);
	      // }

	      return done(null, user);
	    });
	  });
		// console.log("hello");
		// User.findOne({username:username}).exec(function(error,user){
		// 	if(user){
		// 		return done(null,user);
		// 	}
		// 	else{
		// 		console.log("hello");
		// 		return done(null,false);
		// 	}
// 		// })
	})
);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

require('./server/config/routes')(app);

app.listen(config.port,function () {
	console.log('Server is running on port',+config.port);
});