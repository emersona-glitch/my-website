const express = require('express');
const nodemailer = require('nodemailer');
const auth = require('./Gmail_config/auth.config');
require('dotenv').config();
// const myEmail = require('./Gmail_config/my.secret.email');
const myEmail = process.env.SECRET_EMAIL


// sets up an instance of express
const router = express.Router()

// retriving these codes involves going to google's API developer console
// and doing a bunch of fancy stuff.
// I simply followed this guys instructions:
// https://levelup.gitconnected.com/multi-purposes-mailing-api-using-nodemailer-gmail-google-oauth-28de49118d77
// N.B. When you get to the part where you need to authorize the gmail API,
// I ran into a problem where I wasn't being allowed to do so, 
// this was because I needed to set myself up as a test user, as I had
// mistakenly assumed that I, being the developer, would have access to my own
// program.


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth
});

// req = request    i.e. req.body for our purposes
// res = response   i.e. HTTP response status codes
// :)

// we use the post method to post data to an endpoint
// which in this case, will be the gmail
// api, accessed via nodemailer.

router.post('/', async (req, res) => {

  try {

    const messageReturn = await transporter.sendMail({
      from_name: req.body.name,
      from_address: myEmail,
      to:   myEmail,
      text: `${req.body.message}. 
      
      Please respond at ${req.body.email}`,
      subject: `${req.body.name} wants to get in touch.`
    })
    
    if (messageReturn.messageId) {
      console.log('email sent:', messageReturn.messageId)
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }

  } catch (error) {
    console.log('Oh boy we got an error: ', error, myEmail);
    res.sendStatus(500);
  }
  
  // when I first set this up,
  // I was missing a proxy port address in
  // my package.json file (React uses 3000 by default, but
  // in my server.js file I have the port set to 5000),
  // so don't forget that proxy if you're starting from scratch :)

  // send back a confirmation that our email has been successfully sent!

})

module.exports = router;