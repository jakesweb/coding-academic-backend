/* 
  ./models/course-model.js
  model for interacting with the database on courses
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, require: true },
  videoLink: { type: String, require: false },
  documentLink: { type: String, require: false }
});

module.exports = mongoose.model("Courses", schema);
