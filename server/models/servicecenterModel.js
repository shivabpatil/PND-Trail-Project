var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var servicecenterModel = new Schema({
	name:{
		type:String,
		required:true
	},
	_adminId:Schema.Types.ObjectId,
	_areaId:Schema.Types.ObjectId,
	_brandId:Schema.Types.ObjectId,

	brand:{
		type:String,
	},
	email:{
		type:String,
	
	},
	contact:{
		type:Number,
		required:true
	},
	address:{
		line1:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true
		},
		
		landmark:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/i
		},
		area:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true
		},
		city:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true,
			default:"Pune"
		},
		state:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true,
			default:"Maharashtra"
		}
	},
	
	area_group:{
		type:String,
	},
	capacity:{
		type:Number,
		
	},
	slotcapacity:{
		type:Number,
	
	},
	deliverypersons:{
		type:Number,
		
	},
	start_time:{
		type:Date,
		default:4
		
	},
	end_time:{
		type:Date,
		default:4
		
	},
	create_at:{
		type:Date,
		default: Date.now
	},
	updated_at:{
		type:Date
		
	}
	
});

module.exports = mongoose.model('Servicecenter',servicecenterModel);
