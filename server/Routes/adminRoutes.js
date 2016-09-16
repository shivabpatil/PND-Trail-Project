var express = require('express');

var routes = function (Admin) {
	var adminRouter = express.Router();
	var adminController = require('../Controllers/adminController')(Admin)
	adminRouter.route('/admins')
		.post(adminController.post)
		.get(adminController.get);

	//middleware
	adminRouter.use('/admins/:adminId',function (req,res,next) {
		Admin.findById(req.params.adminId,function (error,admin) {
			if (error) {
				res.status(500).send(error);
			} else if (admin) {
				req.admin = admin;
				next();
			} else {
				res.status(400).send('admin not fond');
			}
		}); 
	});	

	// get single admin 

	adminRouter.route('/admins/:adminId')
		.get(function (req,res) {
			res.json(req.admin);
		})
		.put(function (req,res) {	
			req.admin.name = req.body.name;
			req.admin.lname = req.body.lname;
			req.admin.contact = req.body.contact;
			req.admin.email = req.body.email;
			req.admin.position = req.body.position;
			req.admin.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.admin);
				}
			});
		})
		.patch(function(req,res){
			if(req.body._id){
				delete req.body._id;
			}
			for(var p in req.body){
				req.admin[p]=req.body[p];
			}
			req.admin.save(function (error) {
				if (error) {
					res.status(500).send(error);
				} else {
					res.json(req.admin);
				}
			});
		})
		.delete(function (req,res) {
			req.admin.remove(function (error) {
				if (error) {
					res.status(500).send(error);	
				} else {
					res.status(204).send('Removed');
				}
			});
		});
	return adminRouter;
	 
};

module.exports = routes;