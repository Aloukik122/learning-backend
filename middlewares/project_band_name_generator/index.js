import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  var bandName = `${req.body['street']} ${req.body['pet']}`;
  res.send(`<h1>Here is your Band Name : </h1> ${bandName}`);
});

app.listen(`${port}`, () => {
  console.log(`listining on port ${port}`);
});
