
var receiptController = function(Receipt) {

	var post = function (req,res) {
			var receipt = new Receipt(req.body);
			receipt.save();
			//console.log(receipt.save());
			res.status(201).send(receipt); 
		};


	var get = function (req,res) {
			Receipt.find(function (error,receipts) {
				if (error) {
				 	res.staus(500).send(error);
				 } else {
				 	res.json(receipts);
				 } 
			})
		};


	return{
		get:get,
		post:post
	};
};

module.exports = receiptController; 