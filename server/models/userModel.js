var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
	},
	contact:{
		type:Number
	},
	username:{
		type:String,
	},
	
	password:{
		type:String,
		
	},
	roles:[type:String]
	
});

module.exports = mongoose.model('User',userModel);
