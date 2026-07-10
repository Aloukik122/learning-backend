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

  /* const notes =  await noteModel.findOne()  ----------- we can use findOne method insted of find both work same most of the time

find => [{},{}] data or [] empty arr
findOne => {} data or null
  */

  /* const notes =  await noteModel.find({   //--------------- we can use conditions in the find to find specific thing like title, descreption //

    titel : " test_title"
  }) */
  res.status(200).json({
    message: 'Notes fetch successfully',
    notes: notes,
  });
});

//------------------------------------------------------------------------------------------

app.delete('/notes/:id', async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id, //------------(_id) is lye use krte h ki mongodb me ID (_id ) se save hoti h
  });

  res.status(200).json({
    message: 'Note deleated successfully',
  });
});

//--------------------------------------------------------------------------------------------

app.patch('/notes/:id', async (req, res) => {
  const id = req.params.id;
  const descreption = req.body.descreption;
  await noteModel.findOneAndUpdate({ _id: id }, { descreption: descreption });

  res.status(200).json({
    message: 'Note has been updated',
  });
});
module.exports = app;
