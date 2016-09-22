var customerController = function(Customer) {
	var get = function (req,res) {

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
		};

	var post = function (req,res) {
			var customer = new Customer(req.body);
			customer.save();
			res.status(201).send(customer); 
		};

	return{
		get:get,
		post:post
	};
};

module.exports = customerController; 