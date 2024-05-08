// ! Bring the express module into our server file
const express = require('express')

// ! Create an instance of express, bu calling the function.
const app = express()
const port = 5000

// * The server will be attached to "localhost", at specific port (5000)

// ! Make server deliver our webpage
  // Tell the server where the files for the page are
app.use(express.static('server/public'))

// ! Actually start server when file is ran
app.listen(
    port,
    () => { console.log("Listening on port...", port)}
)



let quoteList = [
  { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
  { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
  { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

app.get( '/quotes', (req , res) => {
//write the code for the endpoint/route
// ! how to send status codes. res.sendStatus(500)
// res.sendStatus(500)
//* to send some data
res.send(quoteList)


})