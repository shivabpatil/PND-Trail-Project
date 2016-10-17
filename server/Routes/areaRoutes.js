var express = require('express');

var routes = function (Area) {
	var areaRouter = express.Router();

	var areaController = require('../Controllers/areaController')(Area);
	areaRouter.route('/areas')
		.post(areaController.post)
		.get(areaController.get);


		//middleware for bike 
	areaRouter.use('/areas/:areaId',function (req,res,next) {

		Area.findById(req.params.areaId,function (error,area) {
			if (error) {
				res.status(500).send(error);
			} else if (area) {
				req.area = area;
				next();
			} else {
				res.status(400).send('area not found');
			}
		})
	})

	areaRouter.route('/areas/:areaId')
		.get(function (req,res) {
			res.json(req.area);
		})
		.put(function (req,res) {
			req.area.name = req.body.name;
			req.area.no_service_centers = req.body.no_service_centers;
			req.area.no_dpersons = req.body.no_dpersons;
			req.area.service_center_id = req.body.service_center_id;
			req.area.dperson_id = req.body.dperson_id;
			
			req.area.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.area);
				}
			});

		})
		.patch(function (req,res) {	
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.area[p] = req.body[p];
			}

			req.area.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.area);
				}
			});
		})
		.delete(function (req,res) {
			req.area.remove(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.status(204).send('Removed');
				}
			});
		})
		
	return areaRouter;
}

module.exports = routes;