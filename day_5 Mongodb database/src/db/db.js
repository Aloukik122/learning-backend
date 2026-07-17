const mongoose = require('mongoose'); //------ mongodb database se connect krne k lye mongoose k use krenge

async function connectDB() {
  //---- ek function bnayenge connectDB() nam k or jaise he function exicute hoga
  //---- " await " is lye lgate h ki - jb tk server database se connect na ho jaye tb tk "wait" kro isi lye "async" k be use hota h
  await mongoose.connect(
    //---- mongoose mongodb ke database se connect krega
    'MongoDB Key Here'
  );
  console.log('connected to db');
}

module.exports = connectDB;
