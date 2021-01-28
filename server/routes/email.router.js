const express = require('express');

// sets up an instance of express
const router = express.Router()


// req = request    i.e. req.body for our purposes
// res = response   i.e. HTTP response status codes
// :)

// we use the post method to post data to an endpoint
// which in this case, will be the information
// that we collected from the client 
router.post('/', (req, res) => {

  // I had an issue getting this console log to show
  // when sending the post request from my client
  // and I realized: I was missing a proxy port address in
  // my package.json file (React uses 3000 by default, but
  // in my server.js file I have the port set to 5000),
  // so don't forget that proxy if you're starting from scratch :)

  console.log('made it to email router yeeeet!', req.body.name);
  // send back a confirmation that our email has been successfully sent!
  res.sendStatus(201);

})

module.exports = router;