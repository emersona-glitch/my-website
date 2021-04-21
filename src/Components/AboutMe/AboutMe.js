import React from 'react';
import './AboutMe.css';
import selfie from './selfie.jpg';
import {
  Typography,
  Grid,
  Divider,
  Hidden,
  // Container,
  // Paper,
} from '@material-ui/core';

const copy = `
  I'm a full stack developer currently looking for a role where I would be useful in the tech world!
  Some of the technologies I'm skilled with include: React (which this webpage is built with), Node and Express,
  PostgreSQL, Java, Ruby, Python, and even a little jQuery! I have experince working with teams of Agile developers,
  as well as experience working remotely. I really enjoy problem solving, both in my professional and personal
  life, so much so that I decided on a career as a developer because it seemed like the funnest way to
  spend all day solving problems!
`;

function AboutMe() {


  return (
    <div 
    className='about-me'
    name='about-me'>
      
      {/* Header */}
      <Typography
      variant='h4'>
        About Me!
      </Typography>
      
      <br/>

      <Grid container>

        {/* Selfie */}
        <Grid item xs={2} sm={1}></Grid>
        <Grid item xs={8} sm={4}>
            <img id='selfie' alt="Me being handsome" src={selfie}/>
        </Grid>
        <Grid item xs={2} sm={1}></Grid>
       
        <Hidden smUp>
          <Grid item xs={12}>
            <br/>
            <br/>
          </Grid>`
        </Hidden>

        {/* Bio */}
        <Grid item xs={2} sm={1}></Grid>
        <Grid item xs={8} sm={4}>
          <Typography>
            {copy}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={1}></Grid>

      </Grid>
    </div>
  );
}
export default AboutMe;