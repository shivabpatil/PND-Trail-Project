var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(config){
	mongoose.connect(config.db );
	var db = mongoose.connection;
	db.on('error',console.error.bind(console,'connection error..'))
	db.once('open',function callback(){
		console.log('Pnd data connected....');
	});

	var userModel = new Schema({
	
		username:{
			type:String,
		},
		password:{
			type:String,
		}
	});

	var User = mongoose.model('User',userModel);
}