var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};

// edit user profile

module.exports.profileEdit = function(req, res) {
  console.log(req.user);
  console.log(req.body);
    req.user.name = req.body.name,
    req.user.email = req.body.email,
    req.user.setPassword(req.body.password);
    req.user.save(function(error) {
      if(error){
        res.status(500).send(error);
      }else{
        var token;
        token = req.user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      }
    });
};

// set the user role
module.exports.roleEdit = function(req, res) {
  console.log('user req=>'+req.user);
  console.log('user res=>'+req.body.role);
    req.user.role = [];
      console.log('user req1=>'+req.user);
    for(var role in req.body.role){
      if(req.user.role.indexOf(role)==-1){
        req.user.role.push(req.body.role[role]);
      }
    }


    console.log('user req after=>'+req.user);
    req.user.save(function(error) {
      if(error){
        res.status(500).send(error);
      }else{
        res.send('Ok')
      }
    });
};


// if (!req.payload._id) {
//   res.status(401).json({
//     "message" : "UnauthorizedError: private profile"
//   });
// } else {
//    User
//       .findById(req.payload._id)
//       .exec(function(err, user) {
//           if (err) {
//             res.status(500).send(error);
//           }else{
//             user.name = req.body.name,
//             user.email = req.body.email,
//             user.setPassword(req.body.password);
//             user.save(function(err) {
//               if(err){
//                 res.status(500).send(err);
//               }else{
//                 var token;
//                 token = user.generateJwt();
//                 res.status(200);
//                 res.json({
//                   "token" : token
//                 });
//               }
//             });
//           }
//         })
// }
