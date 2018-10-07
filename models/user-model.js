/* 
  ./models/user-model.js
  model for interacting with the database on user transactions
*/
const mongoose = require('mongoose');
// const Courses = require('./course-model')(mongoose);
const Schema = mongoose.Schema;

const schema = new Schema({ 
  email: {type: String, required: true, lowercase: true, unique: true}, 
  password: {type: String, required: true}, 
  role: {type: String, default: 'student'}, 
  paid: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', schema);
