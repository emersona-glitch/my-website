import React from 'react';
import './Gallery.css';
import {
  Typography
} from '@material-ui/core';

function Gallery() {


  return (
    <div 
    className='gallery'
    name='gallery'>
      <Typography
      variant='h4'>
        Image Gallery
      </Typography>
      <br/>
      <Typography>
      These are just some pictures that I like. I hope you enjoy!
      </Typography>
    </div>
  );
}
export default Gallery;