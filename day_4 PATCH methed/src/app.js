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

module.exports = app;
