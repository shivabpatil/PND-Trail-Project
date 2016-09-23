var mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	stylus = require('stylus'),
	logger =require('morgan');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//databse connection 
if (env === 'development') {
	mongoose.connect('mongodb://localhost:27017/pnddata');
} else {
	mongoose.connect('mongodb://pnddev:13021991@ds033076.mlab.com:33076/pnddev/pnddevdata');
}

var db = mongoose.connection;

var express = require('express');

var app = express();

function compile(str,path) {
	return stylus(str).set('filename',path);
}

app.set('views',__dirname + '/server/views');
app.set('view engine','jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(stylus.middleware({
		src: __dirname + '/public',
		compile:compile
	}
));

app.use(express.static(__dirname + '/public'));


app.get('/partials/:partialsPath',function (req,res) {
	console.log('inside server route')
	res.render('partials/' + req.params.partialsPath); 
})

var port = process.env.PORT || 4000;
// get all models 
var Admin = require('./server/models/adminModel'); 
var Servicecenter = require('./server/models/servicecenterModel');
var Customer = require('./server/models/customerModel');
var Bike = require('./server/models/bikeModel');
var Rate = require('./server/models/rateModel');


// add body-parsr to app


//declare routers for collections 
adminRouter = require('./server/Routes/adminRoutes')(Admin);
servicecenterRouter = require('./server/Routes/servicecenterRoutes')(Servicecenter);
customerRouter = require('./server/Routes/customerRoutes')(Customer);
bikeRouter = require('./server/Routes/bikeRoutes')(Bike);
rateRouter = require('./server/Routes/rateRoutes')(Rate);

//set up routers in api 

app.use('/api1',adminRouter);
app.use('/api2',servicecenterRouter);
app.use('/api3',customerRouter);
app.use('/api4',bikeRouter);
app.use('/api5',rateRouter);


app.get('*',function (req,res) {
	res.render('index'); 
});

app.listen(port,function () {
	console.log('Server is running on port',+port);
});