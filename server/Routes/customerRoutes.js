var express = require('express');

var routes = function (Customer) {
	var customerRouter = express.Router();
	//customer api routes 
	customerRouter.route('/customers')
		.post(function (req,res) {
			var customer = new Customer(req.body);
			customer.save();
			res.status(201).send(customer); 
		})
		.get(function (req,res) {

			//query with contact number 
			var query={};
			if (req.query.contact) {
				query.contact=req.query.contact;
			}

			//return all customers 
			Customer.find(query,function (error,customers) {
				if (error) {
				 	res.staus(500).send(error);
				 } else {
				 	res.json(customers);
				 } 
			})
		});

	//get single customer 
	customerRouter.route('/customers/:customerId')
		.get(function (req,res) {
			Customer.findById(req.params.customerId,function (error,customer) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(customer);
				}
			});
		})
		.put(function (req,res) {
			Customer.findById(req.params.customerId,function (error,customer) {
				if (error) {
					res.status(500).send(error);
				} else {
					customer.name = req.body.name;
					customer.lname = req.body.lname;
					customer.contact = req.body.contact;
					customer.email = req.body.email;
					customer.address = req.body.address;
					customer.save();
					res.json(customer);
				}
			});
		})
	return customerRouter; 
};

module.exports = routes;