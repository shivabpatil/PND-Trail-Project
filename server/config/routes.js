

module.exports = function (app) {
	var Admin = require('../models/adminModel'); 
	var Servicecenter = require('../models/servicecenterModel');
	var Customer = require('../models/customerModel');
	var Bike = require('../models/bikeModel');
	var Rate = require('../models/rateModel');
	var Schedule = require('../models/scheduleModel');
	var Slot = require('../models/slotModel');
	var BookedSlot = require('../models/bookedSlotModel');

	adminRouter = require('../Routes/adminRoutes')(Admin);
	servicecenterRouter = require('../Routes/servicecenterRoutes')(Servicecenter);
	customerRouter = require('../Routes/customerRoutes')(Customer);
	bikeRouter = require('../Routes/bikeRoutes')(Bike);
	rateRouter = require('../Routes/rateRoutes')(Rate);
	scheduleRouter = require('../Routes/scheduleRoutes')(Schedule);
	slotRouter = require('../Routes/slotRoutes')(Slot);
	bookedSlotRouter = require('../Routes/bookedSlotRoutes')(BookedSlot);

	app.use('/api1',adminRouter);
	app.use('/api2',servicecenterRouter);
	app.use('/api3',customerRouter);
	app.use('/api4',bikeRouter);
	app.use('/api5',rateRouter);
	app.use('/api6',scheduleRouter);
	app.use('/api7',slotRouter);
	app.use('/api8',bookedSlotRouter);
	
	app.get('/partials/*',function (req,res) {
		res.render('../../public/app/' + req.params[0]); 
	});

	app.get('*',function (req,res) {
		res.render('index'); 
	});

	


}