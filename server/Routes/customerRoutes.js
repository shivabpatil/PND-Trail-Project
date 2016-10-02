var express = require('express');

var routes = function (Customer) {
	var customerRouter = express.Router();
	var customerController = require('../Controllers/customerController')(Customer);
	//customer api routes 
	customerRouter.route('/customers')
		.post(customerController.post)
		.get(customerController.get);

	//Customer middleware

	customerRouter.use('/customers/:customerId',function (req,res,next) {
		Customer.findById(req.params.customerId,function (error,customer) {
			if (error) {
				res.status(500).send(error);
			} else if (customer) {
				req.customer = customer;
				next();
			} else {
				res.status(400).send('customer not found');
			}
		});
	});
	//get single customer 
	customerRouter.route('/customers/:customerId')
		.get(function (req,res) {		
				res.json(req.customer);		
			})
		.put(function (req,res) {
				req.customer.name = req.body.name;
				req.customer.lname = req.body.lname;
				req.customer.contact = req.body.contact;
				req.customer.alternate_contact = req.body.alternate_contact;
				req.customer.email = req.body.email;
				req.customer.address = req.body.address;
				req.customer.save(function (error) {
					if (error) {
						res.status(500).send(error);
					} else {
						res.json(req.customer);
					};
				});
			})
		.patch(function (req,res) {
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.customer[p] = req.body[p];
			}
			req.customer.save(function (error) {
				if (error) {
					res.status(500).send(error);		
				} else {
					res.json(req.customer);
				}
			});
		})
		.delete(function (req,res) {
			req.customer.remove(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.status(204).send('Removed');
				}
			});
		})
	return customerRouter; 
};

module.exports = routes;