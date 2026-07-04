const express = require('express');

const app = express();

const notes = [];

app.use(express.json());

app.post('/notes', (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: 'we get the notes',
  });
});

app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'notes is sent',
    notes: notes,
  });
});

app.delete('/notes/:index', (req, res) => {
  const index = req.params.index; //--------------------index number [ 2 ] or [ 13 ]
  delete notes[index];
  res.status(200).json({
    message: 'note has been deleted',
  });
});

//------------------------------------------------------------------------------------------------

/* kisi be notes ka descreption change ya update krna ho to PATCH ka use krenge */

app.patch('/notes/:index', (req, res) => {
  const index = req.params.index; //-------kon se note ka descreption update krna h uske lye index pta kr rhe h

  const descreption = req.body.descreption; //---------- req.body.descreption -- se jo hm "naya descreption" send krenge vo ayega

  notes[index].descreption = descreption; //---------- notes [ ka jo index eg. 1,2,13] uske ".descreption" ko new " = descreption" se change kr do ya uske brabr kr do

  /* challange --->

        title option bhi add krna h kise krenge

*/

  res.status(200).json({
    message: 'note update successfully',
  });
});

//------------------------------------------------------------------------------------------------------
/* task " add PATCH option for (title) so usko bhi (descreption) ke jise update kr ske" */

module.exports = app;
