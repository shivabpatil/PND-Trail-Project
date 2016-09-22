var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var servicecenterModel = new Schema({
	name:{
		type:String,
		match:/^[a-zA-Z ]{2,50}$/,
		required:true
	},
	_adminId:Schema.Types.ObjectId,
	brand:[String],
	email:{
		type:String,
		match: /.+@.+\..+/,
	},
	contact:{
		type:[Number],
		required:true
	},
	address:{
		building:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/,
			required:true
		},
		street:{
			type:String,
			match:/^[a-zA-Z0-9\s,'-]*$/i
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
	
	location:{
		type:String,
	},
	capacity:{
		type:Number,
		required:true
	},
	slotcapacity:{
		type:Number,
		required:true
	},
	deliverypersons:{
		type:Number,
		required:true
	},
	start_time:{
		type:Date,
		required:true
	},
	end_time:{
		type:Date,
		required:true
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
