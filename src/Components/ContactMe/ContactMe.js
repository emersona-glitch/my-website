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
  
  // state hook for whether or not are contact form dialog is open
  const [open, setOpen] = useState(false);
  
  // state hook for whether or not or loading bar is open
  // const [loadingOpen, setLoadingOpen] = useState(props.store.confirm === 'waiting');

  // state hook for whether or not our snack bar is open!
  const [snackOpen, setSnackOpen] = useState(false);

  const [snackSeverity, setSnackSeverity] = useState('success');
  
  const [snackMessage, setSnackMessage] = useState('success');

  // state hook for whether the form has info in it
  // ( How can we combine this with the state hook below? )
  const [complete, setComplete] = useState({
    name: true,
    email: true,
    message: true
  });
  
  // state hook for contact form
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });
  

  // event listener to update state
  // while user fills out form
  const updateContact = event => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });
  };
  
  // tell the contact dialog to open
  const handleClickOpen = () => {
    setOpen(true);
    setComplete({
      name: true,
      email: true,
      message: true
    });
  };


  // tell the loading bar to open
  // const handleClickLoading = () => {
  //   setLoadingOpen(true);
  // }

  
  // Upon form completion and clicking send button
  // do this!
  const handleSend = () => {

    // check to see if all of the texts fields have been filled
    if (contact.name === '' || contact.email === '' || contact.message === '') {
      
      // if any of them haven't, we'll set the error attribute
      // on them to be true by using this logic.
      setComplete({
        name: (contact.name !== ''),
        email: (contact.email !== ''),
        message: (contact.message !== '')
      })

    } else {
      
      // send 'waiting' to reducer
      props.dispatch({type: 'SET_CONFIRMATION', payload: 'waiting'});

      // close the dialog
      setOpen(false);

      // send the form's contents to our email saga
      // (which will then send it to server and so on)
      props.dispatch({
        type: 'SEND_EMAIL',
        payload: contact
      })

      // open the loading bar
      // setLoadingOpen(true);

      // clear state for next time 
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
// been sent.

// we want the dialog to be closed when this reducer is idle, 201, or 500
// we want it to be open when its status is waiting.


const isLoading = () => {
  // if (props.store.confirm === 'waiting') {
  //   return false;
  // }
  return (props.store.confirm === 'waiting') 
}

// the loading bar should be open while this reducer is set to waiting
// it should close and trigger a success or failure snackbar when
// it gets sent anything else.





  // !!!
  // A lot of the following seems very redundant!
  // !!!




  // for closing the snackbar
  const handleSnackClose = () => {
    
    // close the snackbar:
    setSnackOpen(false);

    // set confirm reducer to idle:
    props.dispatch({type: 'SET_CONFIRMATION', payload: 'idle'});

  }
  


  // What to do when the loading bar closes
  const handleLoadingClose = () => {
    
    console.log('closing the loading bar');
    // the loading bar closes itself, since its being-open
    // depends on the contents of props.store.confirm


    // when the confirm reducer gets set to
    // 201, we want to give our snackbar these settings:
    if (props.store.confirm === 201) {
      setSnackSeverity('success')
      setSnackMessage('Your email has been sent!');
    }
    
    // or if the confirm reducer gets set to
    // 500, we want to give our snackbar these settings:
    if (props.store.confirm === 500) {
      setSnackSeverity('error')
      setSnackMessage('I\'m so sorry, but it seems there was an error in sending your email!')
    }

    // and then we'll open the snackbar.
    setSnackOpen(true);
  }

  // what to do if the user hits 'cancel' in our dialog
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

      <Dialog open={isLoading()} onExited={handleLoadingClose}>
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
        <Alert onClose={handleSnackClose} severity={snackSeverity}>
          {snackMessage}
        </Alert>
      </Snackbar>

      {/* <EmailSuccess/> */}

    </div>
  )
};

export default connect(mapStoreToProps)(ContactMe);