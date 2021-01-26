const express = require('express'); // this gives access to the express library by searching node_modules for 'express'
const app = express(); // this creates an instance of the express constructor, named "app"

// now, access methods used for making a server
//app.listen(8000,function(){ // this method starts up the server locally on the port that is the first argument - in this case http://localhost:8000
//console.log("server is running")
//})

// run the server.js file by entering this in the terminal: node server.js.
// The file is being run on our terminal. To end this process, push CTRL+C.
// Whenever you make changes to your server, you need exit and restart it.

// now our server is listening for requests being made on localhost:8000
// let's return some mock JSON data

const mockUserData=[
  {name:'Doug'},
  {name:'Issac'}
]
app.get('/users', function(req,res){
  res.json({
      success: true,
      message: 'successfully got users.',
      users: mockUserData
  })
})

app.listen(8000,function(){console.log("server is running")})
 // this method starts up the server locally on the port that is the first argument - in this case http://localhost:8000
 
