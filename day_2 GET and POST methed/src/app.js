// server ko create krna 'app.js' k kam h
// server ko start krna 'server.js' k kam h

const express = require('express');

const app = express(); // server ka instance create krna

/*
_____________________________________________________________________________________________

GET - server se data fetch krna ho tb ise use krte h
POST - server pr data send krna ho tb ise use krte h
PATCH - server pr data alredy h or use update krna ho tb ise use krte h
DELETE - server pr data h or use delete krne k lye ise use krte h
__________________________________________________________________________________________

Task --
      note ko create krna, or multipal nots ko fetch krna, or note ko deleate krna.
-----------------------------------------------------------------------------------------------


---notes me do title or disception dena h to

note = {
  title ="my first note",
  discreption = "this is my discreption"
}

const notes = []

-- bahut sare title and discreption ko notes me send krna h jo ke ek object form me honge or ek arrey me store ho jayenge jinko hm excess kr sakte h

const note = [

      note = {
      title ="my first note",
      discreption = "this is my discreption"
    },
    note = {
      title ="my second note",
      discreption = "this is my second discreption"
    }
]

---------- so we need two things "title " and "discreption" from the user

              const note = []

              app.post('/notes',(req, res)=>{

                console.log(req.body);      ------------// data kha a rha h 'body' m but vo JSON form me h or, server use nhi padh sakta h , so we need a middlewair like - express.jeson()  (line 56)

                notes.push --- > push krna h title an discreption or whatever data comes in body and send it to notes arrey
              })

*/

app.use(express.json());

const notes = []; // this is where we collect all the notes

// use rest api and "post"  the data on the server or send the data on the server it
app.post('/notes', (req, res) => {
  notes.push(req.body);

  //sending message to the server that we got the data which was sent to us -- the server
  res.status(201).json({
    // 201 is for created
    message: 'note created successfully',
  });
});

//--------------------------------------------------------------------------------

// use rest api and "get"  the data which is on the server

app.get('/notes', (req, res) => {
  //when the server get 200 req then send the notes the data
  res.status(200).json({
    // 200 for ok
    message: 'note created successfully',
    notes: notes, //------------------ notes ke andar jitne bhi notes h unhe send kre do
  });
});

module.exports = app; // file or server ko export krna to serve.js me
