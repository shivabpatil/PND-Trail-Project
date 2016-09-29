var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminModel = new Schema({
	name:{
		type:String,
		match:/^[a-zA-Z ]{2,50}$/,
		required:true
	},
	lname:{
		type:String,
		match:/^[a-zA-Z ]{2,50}$/i
	},
	contact:{
		type:Number,
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
	position:{
		type:String,
		required:true
	},
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	},
});

module.exports = mongoose.model('Admin',adminModel);
