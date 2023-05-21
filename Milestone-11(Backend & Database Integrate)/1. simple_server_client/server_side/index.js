const express = require('express');

const app = express();

const port = process.env.PORT || 5000; 
// process.env.PORT provides available port for server in the production if the port 5000 is not available
const cors = require('cors');


app.use(cors());
// Middleware cors is used to provide cross origin resource sharing
app.use(express.json());
const users =[
    {id: 1, name :"John", email:"john@gmail.com"},
    {id: 2, name :"Jonny", email:"jonny@gmail.com"},
    {id: 3, name :"Jack", email:"jack@gmail.com"}
]

app.get('/', (req,res)=>{
    res.send("Server is up and running...")
})

app.get('/users', (req,res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log("Post Api hitting")
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port, ()=>{
    console.log("Server is running on port 5000")
})