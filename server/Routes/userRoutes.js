// var express = require('express');
//
// var routes = function(User){
//   var userRouter = express.Router();
//
//   userRouter.get('/lg', function (req, res) {
//       res.render('index', { user : req.user });
//   });
//
//   userRouter.get('/register', function(req, res) {
//       res.render('register', { });
//   });
//
//   userRouter.post('/register', function(req, res) {
//       User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
//           if (err) {
//               return res.render('register', { user : user });
//           }
//
//           passport.authenticate('local')(req, res, function () {
//               res.redirect('/lg');
//           });
//       });
//   });
//   userRouter.get('/login', function(req, res) {
//       res.render('login', { user : req.user });
//   });
//
//   userRouter.post('/login', passport.authenticate('local'), function(req, res) {
//       res.redirect('/lg');
//   });
//
//   userRouter.get('/logout', function(req, res) {
//       req.logout();
//       res.redirect('/lg');
//   });
//
//   userRouter.get('/ping', function(req, res){
//       res.status(200).send("pong!");
//   });
//  return userRouter;
//
// }
//
//
// exports.module = routes;
