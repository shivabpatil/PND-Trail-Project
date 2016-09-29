var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var rateModel = new Schema({
	area:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true
		},

	rates:[
		{
			km:{
				type:Number,
				required:true
			},
			price:{
				type:Number,
				required:true
			}
		}
	],
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	},
});

module.exports = mongoose.model('Rate',rateModel);