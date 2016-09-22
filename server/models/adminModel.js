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
	email:{
		type:String,
		match: /.+@.+\..+/,
	},
	position:{
		type:String,
		required:true
	},
	create_at:{
		type:Date
	},
	updated_at:{
		type:Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Admin',adminModel);
