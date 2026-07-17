import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const secret = req.body['secret'];

  //---- you can use it in POST method also
  if (secret === 'aaaa') {
    userIsAuthorised = true;
  }
  next();
}

//app.use(passwordCheck);  //--- run the passwordCheck function ro make user === true buyt dont run it here if we use it here it will give the error 'cant read the property of undefine' because in '/' input field we havent given the password or key

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(passwordCheck); // we use it here

app.post('/submit', (req, res) => {
  // var secret = req.body['secret'];

  if (userIsAuthorised) {
    res.sendFile(__dirname + '/secret.html');
  } else {
    res.redirect('/');
    // res.sendFile(__dirname + '/public/index.html');
  }
});

app.listen(`${port}`, () => {
  console.log(`listen on port ${port}`);
});
