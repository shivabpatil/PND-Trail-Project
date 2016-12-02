var express = require('express');

var routes = function (Receipt) {
	var receiptRouter = express.Router();
	var receiptController = require('../Controllers/receiptController')(Receipt);
	//receipt api routes 
	receiptRouter.route('/receipts')
		.post(receiptController.post)
		.get(receiptController.get);

	//Receipt middleware

	receiptRouter.use('/receipts/:receiptId',function (req,res,next) {
		Receipt.findById(req.params.receiptId,function (error,receipt) {
			if (error) {
				res.status(500).send(error);
			} else if (receipt) {
				req.receipt = receipt;
				next();
			} else {
				res.status(400).send('receipt not found');
			}
		});
	});
	//get single receipt 
	receiptRouter.route('/receipts/:receiptId')
		.get(function (req,res) {		
				res.json(req.receipt);		
			})
		.put(function (req,res) {
				req.receipt.name = req.body.name;
				req.receipt.lname = req.body.lname;
				req.receipt.contact = req.body.contact;
				req.receipt.brand = req.body.brand;
				req.receipt.service_center_name = req.body.service_center_name;
				req.receipt.passing = req.body.passing;
				req.receipt.bikenumber = req.body.bikenumber;
				req.receipt.chassis_number = req.body.chassis_number;
				req.receipt.receipt_number = req.body.receipt_number;
				req.receipt.save(function (error) {
					if (error) {
						res.status(500).send(error);
					} else {
						res.json(req.receipt);
					};
				});
			})
		.patch(function (req,res) {
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.receipt[p] = req.body[p];
			}
			req.receipt.save(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.json(req.receipt);
				}
			});
		})
		.delete(function (req,res) {
			req.receipt.remove(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.status(204).send('Removed');
				}
			});
		})
	return receiptRouter; 
};

module.exports = routes;