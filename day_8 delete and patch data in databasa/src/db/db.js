const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(
    'MongoDB Key Here'
  );
  console.log('database is connected');
}

module.exports = connectDB;
