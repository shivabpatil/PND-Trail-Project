var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
	name:{
		type:String,
		match:/^[a-zA-Z ]{2,50}$/,
		required:true
	},
	userName:{
		type:String,
		
	},
	email:{
		type:String,
		match: /.+@.+\..+/,
	},
	password:{
		type:String,
		
	},
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	},
});

module.exports = mongoose.model('User',userModel);
