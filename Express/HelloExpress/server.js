const express = require("express");
const app = express();
const port = 8000;

const users = [
  {firstName: 'Jon', lastName: 'Smith'},
  {firstName: 'Jane', lastName: 'Doe'},
  {firstName: 'Mona', lastName: 'Lisa'},
  {firstName: 'Chris', lastName: 'Orozco'},
  {firstName: 'Takashi', lastName: 'Murakami'},
]

//Middleware functions, responsible for 
//providing and parsing request.body data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/api", (req, res) => {
  res.json({ message: "Is this thing on?" });
});

app.get('/api/users', (req,res) => {
  res.json(users)
})

app.get('/api/users/:id', (req,res) =>{
  console.log(req.params.id)
  res.json(users[req.params.id])
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );