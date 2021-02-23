import React from 'react';
import './Friends.css';
import {
  Typography
} from '@material-ui/core';

function Friends() {


  return (
    <div
    className='friends'
    name='friends'>
      <Typography
      variant='h4'>
        Friends
      </Typography>
      <br/>
      <Typography>
      Here are some friends of mine you might like to know about
      </Typography>
    </div>
  );

  // Victor, Amy, Lizzie, Emma, Hans, Alex, 
}
export default Friends;