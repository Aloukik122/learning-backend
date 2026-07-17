const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(
    'mongodb+srv://aloukikpatel_db_user:Adgjmptwmd@cluster0.31gweu8.mongodb.net/?appName=Cluster0'
    'MongoDB Key Here'
  );
  console.log('database is connected');
}

module.exports = connectDB;
