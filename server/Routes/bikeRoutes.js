var express = require('express');

var routes = function (Bike) {
	var bikeRouter = express.Router();

	var bikeController = require('../Controllers/bikeController')(Bike);
	bikeRouter.route('/bikes')
		.post(bikeController.post)
		.get(bikeController.get);


		//middleware for bike 
	bikeRouter.use('/bikes/:bikeId',function (req,res,next) {

		Bike.findById(req.params.bikeId,function (error,bike) {
			if (error) {
				res.status(500).send(error);
			} else if (bike) {
				req.bike = bike;
				next();
			} else {
				res.status(400).send('bike not found');
			}
		})
	})

	bikeRouter.route('/bikes/:bikeId')
		.get(function (req,res) {
			res.json(req.bike);
		})
		.put(function (req,res) {
			req.bike.brand = req.body.brand;
			req.bike.passing = req.body.passing;
			req.bike.bikenumber = req.body.bikenumber;
			req.bike.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.bike);
				}
			});

		})
		.patch(function (req,res) {	
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.bike[p] = req.body[p];
			}

			req.bike.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.bike);
				}
			});
		})
		.delete(function (req,res) {
			req.bike.remove(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.status(204).send('Removed');
				}
			});
		})
		
	return bikeRouter;
}

module.exports = routes;