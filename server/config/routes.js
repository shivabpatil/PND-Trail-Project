

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

	app.get('*',function (req,res) {
		res.render('index'); 
	});

	


}