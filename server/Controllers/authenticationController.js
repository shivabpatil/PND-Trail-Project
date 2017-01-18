var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);
  console.log(user);
  user.save(function(err) {
    if(err){
      res.status(500).send(err);
    }else{
      var token;
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    }

  });

};

module.exports.userList = function(req,res){
  if (!req.payload._id)  {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else if(req.payload.role.indexOf('admin')>-1){
    console.log(req.payload.role);
    User.find(function (error,users) {
      if (error) {
        res.status(500).send(error);

       } else {
        res.json(users);
       }
    });
  }else{
    res.status(401).json({
      "message" : "UnauthorizedError: admin resource"
    });
  }


};

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
