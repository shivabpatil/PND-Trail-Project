var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var brandModel = new Schema({
	name:{
		type:String,
		required:true
	},
	brand_info:{
		type:String,
	},

	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date,
		
	},
});
module.exports = mongoose.model('Brand',brandModel);
