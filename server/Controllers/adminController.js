
var adminController = function (Admin) {

	var post = function (req,res) {
			var admin = new Admin(req.body); 
			admin.save();
			res.status(201).send(admin);
		}

	var get = function (req,res) {
			//query with name
			var query={};
			if (req.query.name) {
			 	query.name=req.query.name;
			 } 
			//return  all admins
			Admin.find(query,function (error,admins) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(admins);
				}
			});
		};

	return {
		post:post,
		get:get
	};
};

module.exports = adminController;