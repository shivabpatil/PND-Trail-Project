

module.exports = function (app) {
	var Admin = require('../models/adminModel');
	var Servicecenter = require('../models/servicecenterModel');
	var Customer = require('../models/customerModel');
	var Bike = require('../models/bikeModel');
	var Rate = require('../models/rateModel');
	var Schedule = require('../models/scheduleModel');
	var Slot = require('../models/slotModel');
	var BookedSlot = require('../models/bookedSlotModel');
	var Area = require('../models/areaModel');
	var Brand = require('../models/brandModel');
	var Receipt = require('../models/receiptModel');

	var passport = require('passport');

	adminRouter = require('../Routes/adminRoutes')(Admin);
	servicecenterRouter = require('../Routes/servicecenterRoutes')(Servicecenter);
	customerRouter = require('../Routes/customerRoutes')(Customer);
	bikeRouter = require('../Routes/bikeRoutes')(Bike);
	rateRouter = require('../Routes/rateRoutes')(Rate);
	scheduleRouter = require('../Routes/scheduleRoutes')(Schedule);
	slotRouter = require('../Routes/slotRoutes')(Slot);
	bookedSlotRouter = require('../Routes/bookedSlotRoutes')(BookedSlot);
	areaRouter = require('../Routes/areaRoutes')(Area);
	brandRouter = require('../Routes/brandRoutes')(Brand);
	receiptRouter = require('../Routes/receiptRoutes')(Receipt);

	app.use('/api1',adminRouter);
	app.use('/api2',servicecenterRouter);
	app.use('/api3',customerRouter);
	app.use('/api4',bikeRouter);
	app.use('/api5',rateRouter);
	app.use('/api6',scheduleRouter);
	app.use('/api7',slotRouter);
	app.use('/api8',bookedSlotRouter);
	app.use('/api9',areaRouter);
	app.use('/api10',brandRouter);
	app.use('/api11',receiptRouter);

	app.get('/partials/*',function (req,res) {
		console.log(req.params);
		res.render('../../public/app/' + req.params[0]);
	});

	// app.get('/login', function(req, res, next) {
	// 	console.log(passport.authenticate('local'));
	// 	passport.authenticate('local', function(err, user, info) {
	// 	    if (err) { return next(err); }
	// 	    if (!user) { return res.redirect('/loginFailure'); }
	// 	    req.logIn(user, function(err) {
	// 	      if (err) { return next(err); }
	// 	      return res.redirect('/loginSuccess');
	// 		});
	// 	})(req, res, next);
	// })

	// app.post('/login',function(req,res){
	// 		var User = require('../models/accountModel');
	// 		var query={};
	// 		query.name = req.body.username;
	// 		query.password = req.body.password;
	// 		// if(!query.name){
	// 		// 	res.redirect('/loginFailure');
	// 		// }
	// 		console.log("query name"+query.name)
	// 		console.log("query password"+query.password)
	// 		// User.find(function(err,users){
	// 		// 	console.log(users)
	// 		// })
	// 		User.findOne({username:query.name}, function(err, user) {
 //                   console.log(user)
	// 			if (err) {
	// 			 	res.redirect('/loginFailure');
	// 			 } else {
	// 			 	if(user){
	// 			 		if(user.password == query.password){
	// 			 			res.send({success:true,user:user});
	// 			 		}
	// 				 	else{
	// 				 		res.redirect('/loginFailure')
	// 				 	}

	// 			 	}
	// 			 	else{
	// 			 		res.redirect('/loginFailure');
	// 			 	}

	// 			 }
	// 		})

	// 	}
	// );

	app.get('/loginFailure', function(req, res, next) {
	  res.send({success:false});
	});

	app.get('/loginSuccess', function(req, res, next) {
		res.send({success:true,user:user});
	});
	// app.post('/login',function(req,res,next){
	// 	var auth = passport.authenticate('local',function(err,user){
	// 		console.log("routes user =>"+user);
	// 		if(err){
	// 			return next(err);
	// 		}
	// 		if(!user){
	// 			return res.send({success:false})
	// 		}
	// 		req.login(user,function(err){
	// 			if(err){
	// 				return next(err);
	// 			}
	// 			res.send({success:true,user:user})
	// 		})
	// 	})
	// 	auth(req,res,next);
	// });

	app.get('*',function (req,res) {
		res.render('index');
	});




}
