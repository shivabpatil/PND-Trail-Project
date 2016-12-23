// var LocalStrategy = require('passport-local').Strategy;
// var User = require('../models/accountModel');
//
// module.exports = function(app, passport) {
//
//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });
//
//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//             done(err, user);
//         });
//     });
//
//     passport.use(new LocalStrategy({
//             usernameField: 'email',
//             passwordField: 'password',
//             passReqToCallback: true
//         },
//         function(req, email, password, done) {
//             process.nextTick(function() {
//                 User.findOne({ 'email': email, 'password': password }, function(err, user) {
//
//                     if (err)
//                         return done(err);
//
//                     if (!user)
//                         return done(new Error('Invalid useranme or password'));
//
//                     return done(null, user);
//
//                 })
//             })
//         }));
// };
