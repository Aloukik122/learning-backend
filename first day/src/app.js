const express = require('express');

const app = express();

/*

note = {
  title ="my first note",
  discreption = "this is my discreption"
}


const note = [

      note = {
      title ="my first note",
      discreption = "this is my discreption"
    },
    note = {
      title ="my second note",
      discreption = "this is my second discreption"
    }
]

// so we need two things "title " and "discreption" from the user

*/

app.use(express.json());

const notes = []; // this is where we collect all the notes

// use rest api and "post" it
app.post('/notes', (req, res) => {
  console.log(req.body); //request is comming but not showing so we need a middlewair on (line 29) like - express.jeson()
});

module.exports = app;
