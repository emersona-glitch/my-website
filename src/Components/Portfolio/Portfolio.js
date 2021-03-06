import React from 'react';
import './Portfolio.css';
import {
  Typography,
  Grid,
} from '@material-ui/core'

import ProjectComponent from '../ProjectComponent/ProjectComponent'

function Portfolio() {


  return (
    <div className='portfolio'
    name="portfolio">
      
      <Typography
      variant='h4'>
        Portfolio
      </Typography>
      <br/>
      <Grid container>
        <Grid item
        xs={1}>
        </Grid>
        <Grid item xs={10}>
          <ProjectComponent title='Example Project' description='this is an example project'/>

        </Grid>
        <Grid item
        xs={1}>
        </Grid>
      </Grid>
      
      <br/>


    </div>
  );
}
export default Portfolio;