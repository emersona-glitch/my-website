const express = require('express');
// require('dotenv').config();

// setting up an instance of express
// remember: app will now be equal to
// [the value] of calling the express()
// function, versus being simply invoked
// but man is that a different story!
const app = express();

// we need bodyParser in order to 
const bodyParser = require('body-parser');

const emailRoute = require('./routes/email.router');

// here, we're establishing how to parse the
// body of the HTTP requests coming from our client

// the .use() binds middleware funcrtions to our instance 
// of the app object at the path specified.
// If no path is specified (as in several of the lines of
// code below), the path defaults to the root i.e. '/'

// so when we pass in bodyParser, using the .json()
// method, we're saying to please use (either of?) these methods of
// decoding our HTTP requests.

// without bodyParser, we would only have our requests
// (designated as 'req' in our router methods) and no "body"
// Think of it as a form of decoding.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is the actual route that we will take when the
// server gets a request at this URI (imported above)
app.use('/api/email', emailRoute);

// a middleware function used to serve up static files
// I can't find any other reference to 'build' in the code
// why isn't it 'public'? is this only for deployment?
// if I comment out this line of code, everything still works, 
// so I must not have any static files to serve up??
app.use(express.static('build'));

// process is a global object available in node,
// the .env property returns an object containing
// the user environment, so we're saying
// set PORT equal to whatever process.env.PORT
// is (if it exists), or 5000 (if it doesn't).
// (remember, js evaluates expressions from
// left to right.)
const PORT = process.env.PORT || 5000;

// the .listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})