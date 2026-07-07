const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(
    'mongodb+srv://aloukikpatel_db_user:Adgjmptwmd@cluster0.31gweu8.mongodb.net/?appName=Cluster0'
  );
  console.log('connected to db');
}

module.exports = connectDB;

/*

-----if upper code not working then find out what is wrong with it and use try and cath mathod

const mongoose = require('mongoose');

async function connectDB() {
  try {
    // Replace with your actual full connection string and password
    await mongoose.connect(
      'mongodb+srv://aloukikpatel_db_user:Adgjmptwmd@cluster0.31gweu8.mongodb.net/?appName=Cluster0'
    );
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

module.exports = connectDB;


*/

/*

----if upper code not working then find out what is wrong with it and use try and cath mathod and also check what is wrong with database


const mongoose = require('mongoose');

async function connectDB() {
  try {
    // Ensure your connection string looks exactly like this format (with YOUR actual password)
    const connString =
      'mongodb+srv://aloukikpatel_db_user:Adgjmptwmd@cluster0.31gweu8.mongodb.net/?appName=Cluster0';

    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(connString);
    console.log('CONNECTED TO DB SUCCESSFULLY!');
  } catch (error) {
    console.error('CRITICAL DATABASE ERROR:', error.message);
  }
}

module.exports = connectDB;

*/
