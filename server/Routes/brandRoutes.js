var express = require('express');

var routes = function (Brand) {
	var brandRouter = express.Router();

	var brandController = require('../Controllers/brandController')(Brand);
	brandRouter.route('/brands')
		.post(brandController.post)
		.get(brandController.get);


		//middleware for bike 
	brandRouter.use('/brands/:brandId',function (req,res,next) {

		Brand.findById(req.params.brandId,function (error,brand) {
			if (error) {
				res.status(500).send(error);
			} else if (brand) {
				req.brand = brand;
				next();
			} else {
				res.status(400).send('brand not found');
			}
		})
	})

	brandRouter.route('/brands/:brandId')
		.get(function (req,res) {
			res.json(req.brand);
		})
		.put(function (req,res) {
			req.brand.name = req.body.name;
			req.brand_info = req.body.brand_info;
			
			req.brand.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.brand);
				}
			});

		})
		.patch(function (req,res) {	
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.brand[p] = req.body[p];
			}

			req.brand.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.brand);
				}
			});
		})
		.delete(function (req,res) {
			req.brand.remove(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.status(204).send('Removed');
				}
			});
		})
		
	return brandRouter;
}

module.exports = routes;