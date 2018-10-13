/*
  ./controllers/course-controller.js
  used to control the interaction of the course model to the database
*/
require('../env');
const mongoose = require('mongoose');
const Course = require('../models/course-model');

mongoose.connect(process.env.MONGO_URI);

// Create course
exports.create = (name, description, cb) => {
  const course = new Course({
    name: this.name,
    description: this.description
  });
  course.save((err,retCourse) => {
    if (err) {
      return cb(err,null);
    } else {
      return cb(null,err);
    }
  });
}

// delete course
exports.delete = (name, cb) => {
  if (name) {
    Course.deleteOne({ name: name }, (err) => {
      if (err) {
        return cb(err);
      } else {
        return cb(null);
      }
    });
  } else {
    return cb('No name specified');
  }
}
