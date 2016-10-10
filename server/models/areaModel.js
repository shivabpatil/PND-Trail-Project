var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areaModel = new Schema({
	name:{
		type:String,
		required:true
	},
	no_service_centers:{
		type:Number,
	},
	no_dpersons:{
		type:Number,
	},

	service_center_id:[String],

	dperson_id:[String],

	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date,
		
	},
});
module.exports = mongoose.model('Area',areaModel);
