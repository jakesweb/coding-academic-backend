/*
  ./controllers/course-controller.js
  used to control the interaction of the course model to the database
*/
require("../env");
const mongoose = require("mongoose");
const Course = require("../models/course-model");

mongoose.connect(process.env.MONGO_URI);

// Create course
// TODO: add video link input
exports.create = (name, description, cb) => {
  const course = new Course({
    name: this.name,
    description: this.description
  });
  course.save((err, retCourse) => {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, err);
    }
  });
};

// delete course by name
exports.delete = (name, cb) => {
  Course.deleteOne({ name: name }, err => {
    if (err) {
      return cb(err);
    } else {
      return cb(null);
    }
  });
};

// find all courses
exports.findAll = cb => {
  Course.find({}, "name description", (err, docs) => {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, docs);
    }
  });
};

// find course by name
exports.findByName = (name, cb) => {
  Course.find({ name: name }, "name description", (err, docs) => {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, docs);
    }
  });
};

// update course
// TODO: add video link input
exports.updateCourse = (name, key, value, cb) => {
  Course.update({ name: name }, { key: value }, (err, docs) => {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, docs);
    }
  });
};
