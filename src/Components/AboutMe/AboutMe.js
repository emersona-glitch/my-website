import React from 'react';
import './AboutMe.css';
import selfie from './selfie.jpg';
import {
  Typography,
  Grid,
  // Container,
  // Paper,
} from '@material-ui/core';

function AboutMe() {


  return (
    <div 
    className='about-me'
    name='about-me'>

      <Grid container>

        <Grid item xs={2}></Grid>

        <Grid item xs={8} sm={3}>
            <img id='selfie' alt="Me being handsome" src={selfie}/>
        </Grid>
        
        <Grid item xs={1} sm={0}></Grid>

        <Grid item xs={8} sm={4}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet elit augue, et vehicula sapien vulputate nec. Curabitur tristique gravida elit, a porta ligula placerat non. Praesent interdum metus sed ultrices cursus. Curabitur vel facilisis purus. Nulla facilisi. Suspendisse sodales in felis at efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent fringilla sem nec pellentesque faucibus. Nulla auctor fermentum ligula sit amet pulvinar. Maecenas efficitur nibh vulputate, ultrices lectus vel, lobortis ex. Morbi pretium nisl sed tortor venenatis, eget viverra urna ornare. Mauris consectetur vitae tellus ut gravida. 
          </Typography>
        </Grid>

        <Grid item xs={2}></Grid>

      </Grid>

      {/* <p>Let me tell you about me</p> */}

    </div>
  );
}
export default AboutMe;