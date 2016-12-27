

module.exports = function (app,passport) {

	var Customer = require('../models/customerModel');
	var Rate = require('../models/rateModel');
	var Schedule = require('../models/scheduleModel');
	var BookedSlot = require('../models/bookedSlotModel');
	var Area = require('../models/areaModel');
	var Receipt = require('../models/receiptModel');

//import the routes here and add them to express

	customerRouter = require('../Routes/customerRoutes')(Customer);
	rateRouter = require('../Routes/rateRoutes')(Rate);
	scheduleRouter = require('../Routes/scheduleRoutes')(Schedule);

	bookedSlotRouter = require('../Routes/bookedSlotRoutes')(BookedSlot);
	areaRouter = require('../Routes/areaRoutes')(Area);

	receiptRouter = require('../Routes/receiptRoutes')(Receipt);


	app.use('/api1',areaRouter);
	app.use('/api2',customerRouter);
	app.use('/api5',rateRouter);
	app.use('/api6',scheduleRouter);
	app.use('/api8',bookedSlotRouter);
	app.use('/api11',receiptRouter);

	// add router for login and admin here 

	app.get('/partials/*',function (req,res) {
		console.log(req.params);
		res.render('../../public/app/' + req.params[0]);
	});


	app.get('/loginFailure', function(req, res, next) {
	  res.send({success:false});
	});

	app.get('/loginSuccess', function(req, res, next) {
		res.send({success:true,user:user});
	});


	app.get('*',function (req,res) {
		res.render('index');
	});



}
