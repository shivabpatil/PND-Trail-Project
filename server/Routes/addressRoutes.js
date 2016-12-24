var express = require('express');

var routes = function (Customer) {
	var addressRouter = express.Router();

	addressRouter.use('/addresses/:addressId',function (req,res,next) {
    console.log('middlewearaddress');
    var query = {address:{}};
    // query.addresses='';
    // query.addresses._id = req.params.addressId;
    console.log(query);
		Customer.find({"addresses._id":req.params.addressId},function (error,customer) {
      console.log(customer);
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
	addressRouter.route('/addresses/:addressId')
		.get(function (req,res) {
				res.json(req.customer);
			})
		.put(function (req,res) {
				for(var address in req.body.addresses){
					req.customer.addresses.push({
						line1:req.body.addresses[address].line1,
						loc:req.body.addresses[address].loc,
						city:req.body.addresses[address].city,
						state:req.body.addresses[address].state,
						address_type:req.body.addresses[address].address_type,
						address_defalut:req.body.addresses[address].address_default,
					});
				}
				req.customer.save(function (error) {
					if (error) {
						res.status(500).send(error);
					} else {
						res.json(req.customer);
					};
				});
			})

  return addressRouter;
}


module.exports = routes;
