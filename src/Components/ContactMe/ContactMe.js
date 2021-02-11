import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../Redux/mapStoreToProps';

import './ContactMe.css';

import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'

function ContactMe(props) {
  
  // to open our dialogue
  const [open, setOpen] = useState(false);
  
  const [loadingOpen, setLoadingOpen] = useState(false);

  const [snackOpen, setSnackOpen] = useState(false);

  const [complete, setComplete] = useState({
    name: true,
    email: true,
    message: true
  });
  
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const updateContact = event => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });
  };
  
  const handleClickOpen = () => {
    setOpen(true);
    setComplete({
      name: true,
      email: true,
      message: true
    });
  };

  const handleClickLoading = () => {
    setLoadingOpen(true);
  }
  
  const handleSend = () => {
    
    if (contact.name === '' || contact.email === '' || contact.message === '') {
      
      setComplete({
        name: (contact.name !== ''),
        email: (contact.email !== ''),
        message: (contact.message !== '')
      })

    } else {
      
      setOpen(false);

      // commented out for testing

      props.dispatch({
        type: 'SEND_EMAIL',
        payload: contact
      })

      setLoadingOpen(true);
      setContact({
        name: '',
        email: '',
        message: ''
      });

    }
  };


// we now have the response.status of our email being sent stored in
// a reducer at {props.store.confirm}.

// by default, this is set to 'waiting' to indicate that nothing has
// been sent

// the loading bar should be open while this reducer is set to waiting
// it should close and trigger a success or failure snackbar when
// it gets sent to anything else.



  const handleSnackClose = () => {
    setSnackOpen(false);
  }
  
  const handleLoadingClose = () => {
    setLoadingOpen(false);
    setSnackOpen(true);
  }

  const handleEmailSuccess = () => {
    setLoadingOpen(false);
    setSnackOpen(true);
  }

  const handleEmailFailure = () => {
    setLoadingOpen(false);
    setSnackOpen(true);
  }

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
        Contact Me
      </Button>

      <Button
      variant="contained"
      onClick={handleClickLoading}>
        test loading
      </Button>

      <Dialog open={loadingOpen} onClose={handleLoadingClose}>
        <DialogContent id='loading-dialog'>
            <Typography>
              Waiting for confirmation from server that your email was sent...
            </Typography>
        </DialogContent>
      </Dialog>

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
          helperText={complete.name ? '' : "please complete this field"}
          error={complete.name !== true}
          />
          <br/>
          <br/>

          <TextField
          onChange={updateContact}
          fullWidth
          label="Email"
          name="email"
          className="text-field"
          helperText={complete.email ? '' : "please complete this field"}
          error={complete.email !== true}
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
          helperText={complete.message ? '' : "please complete this field"}
          error={complete.message !== true}
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

      <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity="success">
          Email sent successfully!
        </Alert>
      </Snackbar>

      {/* <EmailSuccess/> */}

    </div>
  )
};

export default connect(mapStoreToProps)(ContactMe);