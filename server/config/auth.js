// exports.authenticate = function(req,res){
// 			var User = require('../models/accountModel');
// 			var query={};
// 			query.name = req.body.username;
// 			query.password = req.body.password;
// 			// if(!query.name){
// 			// 	res.redirect('/loginFailure');
// 			// }
// 			console.log("query name"+query.name)
// 			console.log("query password"+query.password)
// 			// User.find(function(err,users){
// 			// 	console.log(users)
// 			// })
// 			User.findOne({username:query.name}, function(err, user) {
//                    console.log(user)
// 				if (err) {
// 				 	res.redirect('/loginFailure');
// 				 } else {
// 				 	if(user){
// 				 		if(user.password == query.password){
// 				 			res.send({success:true,user:user});
// 				 		}
// 					 	else{
// 					 		res.redirect('/loginFailure')
// 					 	}
//
// 				 	}
// 				 	else{
// 				 		res.redirect('/loginFailure');
// 				 	}
//
// 				 }
// 			})
//
// 		}
