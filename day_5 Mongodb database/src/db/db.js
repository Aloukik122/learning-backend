const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(
    'mongodb+srv://cluster0.31gweu8.mongodb.net/" --apiVersion 1 --username aloukikpatel_db_user'
  );
  console.log('connected to db');
}

module.exports = connectDB;
