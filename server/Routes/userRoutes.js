var express = require('express');

var routes = function(User){

  var User = require('../models/userModel');
  var passport = require('passport');
  var userRouter = express.Router();


  userRouter.get('/login', function (req, res) {
      if (req.user) return res.redirect('/');
         res.render('accounts/login', { message: req.flash('loginMessage')});
  });

  userRouter.post('/login', passport.authenticate('local-login', {
       successRedirect: '/profile',
       failureRedirect: '/login',
       failureFlash: true
     }));

  userRouter.get('/signup', function(req, res, next) {
      res.render('accounts/signup', {
        errors: req.flash('errors')
      });
    });

  userRouter.post('/signup', function(req, res, next) {
  var user = new User();

  user.profile.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.profile.picture = user.gravatar();

  User.findOne({ email: req.body.email }, function(err, existingUser) {

    if (existingUser) {
      req.flash('errors', 'Account with that email address already exists');
      return res.redirect('/signup');
    } else {
      user.save(function(err, user) {
        if (err) return next(err);

        req.logIn(user, function(err) {
          if (err) return next(err);
          res.redirect('/profile');

        })
      });
    }
  });
});


  userRouter.get('/logout', function(req, res, next) {
      req.logout();
      res.redirect('/');
    });

  userRouter.get('/edit-profile', function(req, res, next) {
  res.render('accounts/edit-profile', { message: req.flash('success')});
});


  userRouter.post('/edit-profile', function(req, res, next) {
  User.findOne({ _id: req.user._id }, function(err, user) {

    if (err) return next(err);

    if (req.body.name) user.profile.name = req.body.name;
    if (req.body.address) user.address = req.body.address;

    user.save(function(err) {
      if (err) return next(err);
      req.flash('success', 'Successfully Edited your profile');
      return res.redirect('/edit-profile');
    });
  });
});

  userRouter.get('/profile', function(req, res, next) {
  User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) return next(err);

    res.render('accounts/profile', { user: user });

  });


});

  userRouter.get('/ping', function(req, res){
      res.status(200).send("pong!");
  });
 return userRouter;

 }


exports.module = routes;