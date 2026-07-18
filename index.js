import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

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

//app.use(passwordCheck); // we use it here

app.post('/submit', passwordCheck,  (req, res) => {  // ---but we use it here check what happen if we dident put it her. it give error because function is running before it  " get secret key data " so it will give undefined - because of empty data. Now it is running when we click on the submit button or when post req heppen
  // var secret = req.body['secret'];

  if (userIsAuthorised) {
    res.sendFile(__dirname + '/secret.html');
    userIsAuthorised = false
  } else {
    res.redirect('/');
    // res.sendFile(__dirname + '/public/index.html');
  }
});

app.listen(`${port}`, () => {
  console.log(`listen on port ${port}`);
});
