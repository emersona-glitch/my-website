import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../Redux/mapStoreToProps';

import './ContactMe.css';
// import EmailForm from './EmailForm'
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
} from '@material-ui/core';


function ContactMe(props) {
  
  const [open, setOpen] = React.useState(false);
  
  // const [name, setName] = useState('');

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const updateContact = event => {
    // console.log(`${event.target.name}: ${event.target.value}`);
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleSend = () => {
    // check to make sure that all info was input
    // if not, display an alert
    if (contact.name === '' || contact.email === '' || contact.message === '') {
      // turn this into an alert or whatever
      console.log('you haven\'t filled everything out!')
    } else {
      // if all the info was input,
      // send contact information to our Saga!      

      props.dispatch({
        type: 'SEND_EMAIL',
        payload: contact
      })

      setOpen(false);
    }
  };
  
  const handleCancel = () => {
    setContact({
      name: '',
      email: '',
      message: ''
    })
    setOpen(false);
  };

  return (
    <div className='ContactMe'>
      <Button
      variant="contained"
      onClick={handleClickOpen}>
        Contact Me :-|
      </Button>

      <Dialog open={open} onClose={handleClickOpen}>
        <DialogContent id="contact-dialog">
          {/* Name, Your Email, Message */}
          <Typography>
            Let me know what I can do for you.
          </Typography>
          <br/>

          <TextField
          onChange={updateContact}
          fullWidth
          label="Name"
          name="name"
          className="text-field"
          />
          <br/>
          <br/>
          <TextField
          onChange={updateContact}
          fullWidth
          label="Email"
          name="email"
          className="text-field"
          />
          <br/>
          <br/>
          <TextField
          onChange={updateContact}
          fullWidth
          variant="outlined"
          multiline rows={8}
          label="Message"
          name="message"
          className="text-field"
          />

        </DialogContent>
        <DialogActions>
          <Button
          variant="contained"
          onClick={handleSend}
          >
            Send
          </Button>
          <Button
          variant="contained"
          onClick={handleCancel}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
};

export default connect(mapStoreToProps)(ContactMe);