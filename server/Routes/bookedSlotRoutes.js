var express = require('express');

var routes = function (BookedSlot) {
	var bookedSlotRouter = express.Router();

	var bookedSlotController = require('../Controllers/bookedSlotController')(BookedSlot);
	bookedSlotRouter.route('/bookedSlots')
		.post(bookedSlotController.post)
		.get(bookedSlotController.get);


		//middleware for bike 
	bookedSlotRouter.use('/bookedSlots/:bookedSlotId',function (req,res,next) {

		BookedSlot.findById(req.params.bookedSlotId,function (error,bookedSlot) {
			if (error) {
				res.status(500).send(error);
			} else if (bookedSlot) {
				req.bookedSlot = bookedSlot;
				next();
			} else {
				res.status(400).send('bookedslot not found');
			}
		})
	})

	bookedSlotRouter.route('/bookedSlots/:bookedSlotId')
		.get(function (req,res) {
			res.json(req.bookedSlot);
		})
		.put(function (req,res) {
			req.bookedSlot.booking_count = req.body.booking_count;
			req.bookedSlot.booking_date = req.body.booking_date;
			req.bookedSlot.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.bookedSlot);
				}
			});

		})
		.patch(function (req,res) {	
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.bookedSlot[p] = req.body[p];
			}

			req.bookedSlot.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.bookedSlot);
				}
			});
		})
		.delete(function (req,res) {
			req.bookedSlot.remove(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.status(204).send('Removed');
				}
			});
		})
		
	return bookedSlotRouter;
}

module.exports = routes;