var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

// var auth1 = jwt({
//   secret: 'MY_SECRET',
//   userProperty: 'payload'
// });


var ctrlProfile = require('../Controllers/profileController');
var ctrlAuth = require('../Controllers/authenticationController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

//middleware to add user to given request

router.use('/user/:userId',function(req,res,next){
  User.findById(req.params.userId,function(err, user) {
      if (err) {
        res.status(500).send(error);
      } else if(user){
        console.log(user);
        req.user = user;
        next();
      }else {
        res.status(400).send('user not found');
      }
    });
})

// Edit the user details

router.put('/user/:userId',ctrlProfile.profileEdit);
// path request to update the role of the user

router.patch('/user/:userId',ctrlProfile.roleEdit);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/users',auth, ctrlAuth.userList);

module.exports = router;
