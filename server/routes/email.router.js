const express = require('express');
const nodemailer = require('nodemailer');

// sets up an instance of express
const router = express.Router()

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'darion.kris@ethereal.email',
      pass: 'N2uZAydk2ZDs2DcHKC'
  }
});


// req = request    i.e. req.body for our purposes
// res = response   i.e. HTTP response status codes
// :)

// we use the post method to post data to an endpoint
// which in this case, will be the information
// that we collected from the client 


router.post('/', async (req, res) => {

  console.log('made it to email router yeeeet!', req.body.message);
  
  // let info = await transporter.sendMail({
  //   from: '"Fred Foo 👻" <foo@example.com>',  // sender address
  //   to: 'darion.kris@ethereal.email',        // list of receivers
  //   subject: "Hello :)", // Subject line
  //   text: req.body.message, // plain text body
  //   html: `<p>${req.body.message}</p>`, // html body
  // });
  
  const messageReturn = await transporter.sendMail({
    from_name: req.body.name,
    from_address: req.body.email,
    // to:   'emerson.aagaard@gmail.com',
    to:   'darion.kris@ethereal.email',
    text: req.body.message,
    subject: 'Hi from the place!'
  });

  if (messageReturn.messageId) {
    console.log('email sent:', messageReturn.messageId)
    res.sendStatus(201);
  } else {
    res.sendStatus(500);
  }

  // res.sendStatus(201);

  // I had an issue getting this console log to show
  // when sending the post request from my client
  // and I realized: I was missing a proxy port address in
  // my package.json file (React uses 3000 by default, but
  // in my server.js file I have the port set to 5000),
  // so don't forget that proxy if you're starting from scratch :)

  // send back a confirmation that our email has been successfully sent!

})

module.exports = router;