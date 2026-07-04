// const express = require('express');

// const app = express();

// app.listen(3000);




const express = require("express")
cosnt app = express()           // server k instance create krne k lye

app.get('/', (req,res)=>{
  res.send("hello this is on browser")
})

app.get('/note', (req,res)=>{
  res.send("hello this is the note page on browser")
})

app.listen(3000)  // server start krne k lye
