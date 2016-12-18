var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
	name:{
		type:String,
		required:true
	},
	userName:{
		type:String,
	},
	email:{
		type:String,
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
