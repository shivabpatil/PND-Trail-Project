var express = require('express');

var routes = function (Slot) {
	var slotRouter = express.Router();

	var slotController = require('../Controllers/slotController')(Slot);
	slotRouter.route('/slots')
		.post(slotController.post)
		.get(slotController.get);


		//middleware for bike 
	slotRouter.use('/slots/:slotId',function (req,res,next) {

		Slot.findById(req.params.slotId,function (error,slot) {
			if (error) {
				res.status(500).send(error);
			} else if (slot) {
				req.slot = slot;
				next();
			} else {
				res.status(400).send('slot not found');
			}
		})
	})

	slotRouter.route('/slots/:slotId')
		.get(function (req,res) {
			res.json(req.slot);
		})
		.put(function (req,res) {
			req.slot.slot_time= req.body.slot_time;
			req.slot.slot_capacity = req.body.slot_capacity ;
			req.slot.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.slot);
				}
			});

		})
		.patch(function (req,res) {	
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.slot[p] = req.body[p];
			}

			req.slot.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.slot);
				}
			});
		})
		.delete(function (req,res) {
			req.slot.remove(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.status(204).send('Removed');
				}
			});
		})
		
	return slotRouter;
}

module.exports = routes;