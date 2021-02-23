import React from 'react';
import './Greetings.css';
import {
  Typography
} from '@material-ui/core';

function Greetings() {

const copy = `
  Howdy!

  My name is Emerson, and this is a webpage that I put together as a way to represent myself on the internet!

  You can continue scrolling down to see more, or you can use the links in the upper left-hand corner
  of the navigation bar to scroll to a certain section. Please feel free to reach out to me by using
  the "Contact Me" button in the lower right of the page. Take good care of yourself!
`;

  return (
    <div
    className='greetings'
    name='greetings'>
      <Typography
      variant='h4'>
        Greetings!
      </Typography>
      <br/>
      <Typography>
        {copy}
      </Typography>
    </div>
  );
}

export default Greetings;