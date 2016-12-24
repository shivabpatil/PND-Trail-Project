

module.exports = function (app,passport) {
	// var Account = require('../models/accountModel');
	// var Admin = require('../models/adminModel');
	// var Servicecenter = require('../models/servicecenterModel');
	var Customer = require('../models/customerModel');

	var Rate = require('../models/rateModel');
	var Schedule = require('../models/scheduleModel');

	var BookedSlot = require('../models/bookedSlotModel');
	var Area = require('../models/areaModel');
	// var Brand = require('../models/brandModel');
	var Receipt = require('../models/receiptModel');
  // var User = require('../models/userModel');


	// adminRouter = require('../Routes/adminRoutes')(Admin);
	// servicecenterRouter = require('../Routes/servicecenterRoutes')(Servicecenter);
	customerRouter = require('../Routes/customerRoutes')(Customer);
	rateRouter = require('../Routes/rateRoutes')(Rate);
	scheduleRouter = require('../Routes/scheduleRoutes')(Schedule);
  // addressRouter = require('../Routes/addressRoutes')(Customer);
	bookedSlotRouter = require('../Routes/bookedSlotRoutes')(BookedSlot);
	areaRouter = require('../Routes/areaRoutes')(Area);
	// brandRouter = require('../Routes/brandRoutes')(Brand);
	receiptRouter = require('../Routes/receiptRoutes')(Receipt);
	// userRouter =  require('../Routes/userRoutes')(User);

	// /app.use('/api1',adminRouter);
	// app.use('/api2',servicecenterRouter);
	app.use('/api1',areaRouter);
	app.use('/api2',customerRouter);
	// app.use('/api4',addressRouter);
	app.use('/api5',rateRouter);
	app.use('/api6',scheduleRouter);
	app.use('/api8',bookedSlotRouter);
	// app.use('/api10',brandRouter);
	app.use('/api11',receiptRouter);

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

	 	// catch 404 and forward to error handler
		// app.use(function(req, res, next) {
		//     var err = new Error('Not Found');
		//     err.status = 404;
		//     next(err);
		// });


		// development error handler
		// will print stacktrace
		// if (app.get('env') === 'development') {
		//     app.use(function(err, req, res, next) {
		//         res.status(err.status || 500);
		//         res.render('error', {
		//             message: err.message,
		//             error: err
		//         });
		//     });
		// }
		//

		// production error handler
		// no stacktraces leaked to user
		// app.use(function(err, req, res, next) {
		//     res.status(err.status || 500);
		//     res.render('error', {
		//         message: err.message,
		//         error: {}
		//     });
		// });



}
