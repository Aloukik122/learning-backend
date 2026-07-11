const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./model/post.model');

const app = express();

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() }); //--------- file ko read krne ke lye 'multer' k use krte h

app.post('/create-post', upload.single('image'), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);

  //console.log(result);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: 'post create successfullehy',
    post,
  });
});

//------------------------------------------------------------------------------------

app.get('/posts', async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: 'post fetch successfully',
    posts,
  });
});
module.exports = app;
