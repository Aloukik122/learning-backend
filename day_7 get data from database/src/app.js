const express = require('express');
const noteModel = require('./models/note.model');
const app = express();

app.use(express.json());

app.post('/notes', async (req, res) => {
  const data = req.body;

  await noteModel.create({
    title: data.title,
    descreption: data.descreption,
  });

  res.status(201).json({
    message: 'note is created in db',
  });
});

//--------------------------------------------------

app.get('/notes', async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: 'Notes fetch successfully',
    notes: notes,
  });
});

module.exports = app;
