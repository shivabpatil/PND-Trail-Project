var mongoose = require('mongoose');

var bodyParser = require('body-parser');

//databse connection 
var db = mongoose.connect('mongodb://localhost:27017/pnddata');

// get all models 
var Admin = require('./models/adminModel'); 
var Servicecenter = require('./models/servicecenterModel');
var Customer = require('./models/customerModel');
var Bike = require('./models/bikeModel');

var express = require('express');

var app = express();

var port = process.env.PORT | 4000;

// add body-parsr to app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//declare routers for collections 
adminRouter = require('./Routes/adminRoutes')(Admin);
servicecenterRouter = require('./Routes/servicecenterRoutes')(Servicecenter);
customerRouter = require('./Routes/customerRoutes')(Customer);
bikeRouter = require('./Routes/bikeRoutes')(Bike);

//set up routers in api 
app.use('/api',adminRouter);
app.use('/api',servicecenterRouter);
app.use('/api',customerRouter);
app.use('/api',bikeRouter);


app.get('/',function (req,res) {
	res.send('welcome to api'); 
});

app.listen(port,function () {
	console.log('Gulp is running on port',+port);
});