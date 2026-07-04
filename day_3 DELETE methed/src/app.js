const express = require('express');

const app = express();

const notes = [];

app.use(express.json());

app.post('/notes', (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: 'server gets the notes in notes',
  });
});

app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'server gets your notes',
    notes: notes,
  });
});

/* delete /notes/:index     -----------------example -> notes/2 or notes/15 */
//------------notes/:index --- isme sirf index he change hoga ye server ko pta kaise chalega -----  (:) is sign se server ko pta chalta ha ke "index" dinamic h or vo change hoga

app.delete('/notes/:index', (req, res) => {
  /* req.params.index  -------- se pta chalega ki "index" me kya value ayegi */

  const index = req.params.index;

  delete notes[index];

  res.status(200).json({
    message: 'message deleted successfully',
  });
});

module.exports = app;
