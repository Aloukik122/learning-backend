const express = require('express');

const noteModel = require('./models/note.model'); // (.) dot k matlab ek piche folder the (/) k matlab uske andar "models" wala folder "/" uske ander "note.model" file

const app = express();

app.use(express.json()); //----- jb tak y middlewair nhi use hota tb tk "body me data nhi ata"

/* hmare pass 4 api h

  POST /notes => create a note
  GET /notes => get a note
  PATCH /notes/:id => update a note
  DELETE /notes/:id => delete a note

*/

app.post('/notes', async (req, res) => {
  const data = req.body; /* { title , descreption} */

  /*  noteModel.create(data)  ------pr ye sahi method nhi h isle  */

  //------- hm logo ki pta nhi h ki data server se data base me jane me or save hone me kitna time lgaye ga is liye h "awit" k use krenge or upar "async" k

  await noteModel.create({
    title: data.title,
    descreption: data.descreption, // Note: watch out for your spelling of "description" here and in the schema!
  });

  res.status(201).json({
    message: 'note created successfully',
  });
});

/*

if upper code not working write it and find out what is the error by catching it

app.post('/notes', async (req, res) => {
  const data = req.body;

  try {
    const newNote = await noteModel.create({
      title: data.title,
      descreption: data.descreption,
    });

    res.status(201).json({
      message: 'note created successfully',
      note: newNote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
});
*/

//-------------------------------------------------------------------------------------------------

// we use 'get' method for fetching the notes data we send priveously

app.get('/notes', async (req, res) => {
  const notes = await noteModel.find(); //------- jaise '.create' new things create krta h vaise hi '.find' method usi 'arr' ko find krke send krtha h
  res.status(200).json({
    message: 'Notes fetch successfully',
    notes: notes,
  });
});

module.exports = app;
