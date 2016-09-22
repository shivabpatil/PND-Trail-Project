var express = require('express');

var routes = function (Rate) {	
	var rateRouter = express.Router();
	var rateController = require('../Controllers/rateController')(Rate);
	rateRouter.route('/rates')
		.post(rateController.post)
		.get(rateController.get);

	return rateRouter;
};

module.exports = routes;