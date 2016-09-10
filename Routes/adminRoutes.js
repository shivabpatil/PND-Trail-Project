var express = require('express');

var routes = function (Admin) {
	var adminRouter = express.Router();
	adminRouter.route('/admins')
		.post(function (req,res) {
			var admin = new Admin(req.body); 
			admin.save();
			res.status(201).send(admin);
		})
		.get(function (req,res) {
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
		});

	// get single admin 
	adminRouter.route('/admins/:adminId')
		.get(function (req,res) {
			Admin.findById(req.params.adminId,function (error,admin) {
				if (error) {
				 	res.status(500).send(error);
				 } else {
				 	res.json(admin);
				 } 
			});
		})
		.put(function (req,res) {
			Admin.findById(req.params.adminId,function (error,admin) {
				if(error){
					res.status(500).send(error);
				} else {
					admin.name = req.body.name;
					admin.lname = req.body.lname;
					admin.contact = req.body.contact;
					admin.email = req.body.email;
					admin.position = req.body.position;
					admin.save();
					res.json(admin);
				}
			}); 
		});
	return adminRouter;
	 
};

module.exports = routes;