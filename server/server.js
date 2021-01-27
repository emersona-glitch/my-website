const express = require('express');
// require('dotenv').config();

const app = express();

// we need bodyParser in order to 
const bodyParser = require('body-parser');

const emailRoute = require('./routes/email.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/email', emailRoute);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})