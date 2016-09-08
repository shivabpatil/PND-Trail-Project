var mongodb = require('mongodb');
var mongoose = require('mongoose');
// var schema = require('./customer');
// var schema = require('./admin');
var schemaServicecenter = require('./servicecenter');
var schemaBike = require('./bike');
mongoose.connect('mongodb://localhost:27017/pnddata');

var Bike = mongoose.model('Bike',schemaBike,'bikes');

var bike = new Bike({
			"brand":"tvs",
			"passing":"MH12",
			"bikenumber":"EY9973",
			"reading":2384,
		});

// bike.save(function (error) {
// 	if (error) {
// 		console.log(error);
// 		process.exit(1);
// 	} else {
// 		console.log('added record');
// 	}
// });

Bike.find({ brand: 'tvs' },function (error,docs) {
	if (error) {
		console.log(error);
		process.exit(1);
	} else {
		console.log('record found');
		console.log(docs);
	}
})

// var ServiceCenter = mongoose.model('ServiceCenter',schemaServicecenter,'servicecenters');

// var servicecenter = new ServiceCenter({
// 			"name":"TVS Two",
// 			"brand":["tvs","honda"],
// 			"email":"tvs@pnd.com",
// 			"address":{
// 				"building":"Mega max",
// 				"street":"MG road",
// 				"landmark":"Near Max hospital",
// 				"area":"Viman Nagar",
// 				"city":"Pune",
// 				"state":"Maharashtra"
// 			},
// 			"contact":[9090909090,909090978],
// 			"location":"parvati",
// 			"capacity":60,
// 			"slotcapacity":5,
// 			"deliverypersons":8,
// 			"start_time":"10",
// 			"end_time":"16"
// 		});
// servicecenter.save(function (error) {
// 	if (error) {
// 		console.log(error);
// 		process.exit(1);
// 	} else {
// 		console.log('record added');
// 	}
// });

// ServiceCenter.find({ name: 'TVS' },function (error,docs) {
// 	if (error) {
// 		console.log(error);
// 		process.exit(1);
// 	} else {
// 		console.log('found record');
// 		console.log(docs);
// 	}
// });
// var Admin = mongoose.model('Admin',schema,'admins');

// var admin = new Admin({
// 			"name":"Vijay",
// 			"lname":"Kadam",
// 			"contact":9090909090,
//			"email":"vijay@pnd.com",
// 			"position":"CEO"
// 		});

// admin.save(function (error) {
// 	if(error){
// 		console.log(error);
// 		process.exit(1);
// 	} 
// 	else{
// 		console.log('Record added');
// 	}
// })

// Admin.find({ name: 'Vijay' },function (error,docs) {
// 	if (error) {
// 		console.log(error);
// 		process.exit(1);
// 	} 
// 	else {
// 		console.log('found the record');
// 		console.log(docs);
// 	}
// })
// var Customer = mongoose.model('Customer',schema,'customers');

// var customer = new Customer({
// 			"name":"Hariram",
// 			"lname":"Parsad",
// 			"contact":8080808080,
// 			"email":"vijay@pnd.com",
// 			"address":{
// 				"house":"Flat-102,A-wing",
// 				"society":"Max Society",
// 				"street":"Linking road",
// 				"landmark":"Near Mega hospital",
// 				"area":"Viman Nagar"
				
// 			},
// 		});
// customer.save(function (error) {
// 	if(error){
// 		console.log(error);
// 		process.exit(1);
// 	}
// });
// Customer.find({ lname: 'Parsad' },function (error,docs) {
// 	if(error){
// 		console.log(error);
// 		process.exit(1);
// 	}
// 	console.log(docs);
// });