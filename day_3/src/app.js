const express = require('express');

const app = express();

const notes = [];

app.use(express.json());

app.post('/notes', (req, res) => {
  notes.push(req.body);
});

app.get('/notes', (req, res) => {
  res.status(201).json();
  message: 'server gets your notes';
});
app.post('/notes', (req, res) => {
  res.status(200).json();
  notes: notes;
});

module.exports = app;
