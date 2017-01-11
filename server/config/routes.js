

module.exports = function (app,passport) {

	//Models are created
	var Customer = require('../models/customerModel');
	var Area = require('../models/areaModel');

  //Routes for model are created
	customerRouter = require('../Routes/customerRoutes')(Customer);
	areaRouter = require('../Routes/areaRoutes')(Area);

  //Routes are assigned to app and created
	app.use('/api1',areaRouter);
	app.use('/api2',customerRouter);

  // Get all paths starting with partials and replace them with /public/app + given folder and file
	app.get('/partials/*',function (req,res) {
		console.log(req.params);
		res.render('../../public/app/' + req.params[0]);
	});

// all path other than defined paths are redirected to landing page
	app.get('*',function (req,res) {
		res.render('index');
	});

}
