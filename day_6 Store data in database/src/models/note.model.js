const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  //-------Schema matlab kaisa dikhega
  title: String,
  descreption: String,
  /* age: Number, */
});

const noteModel = mongoose.model('note', noteSchema);

module.exports = noteModel;
