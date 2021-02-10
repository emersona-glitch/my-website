import React, { useState } from 'react';
import {Alert} from '@material-ui/lab/'
import {Snackbar} from '@material-ui/core';

export function EmailSuccess(props) {

  const [snackOpen, setSnackOpen] = useState(false);

  const handleSnackClose = () => {
    setSnackOpen(false);
  }

  return (
    <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity="success">
          Email sent successfully!
        </Alert>
      </Snackbar>
  )
}

export default EmailSuccess;