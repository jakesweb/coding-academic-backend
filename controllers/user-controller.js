/*
  ./controllers/user-controller.js
  used to control the interaction of the user model to the database
*/
require('../env');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user-model');

mongoose.connect(process.env.MONGO_URI);

// Create user account
exports.create = (email, password, cb) => {
  // hash password
  bcrypt.hash(password, 10, (err,hash) => {
    if (err) {
      // return error to callback
      return cb(err, null);
    } else {
      // create user object
      const user = new User({
        email: email,
        password: hash,
        role: 'student',
        paid: false
      });
      // save user to database
      user.save(function (err,saveduser) {
        if (err) {
          // return error to callback
          return cb(err, null);
        } else {
          // return user to callback
          return cb(null, saveduser);
        }
      });
    }
  });
}
