import React from 'react';
import './Portfolio.css';
import {
  Paper,
  Typography,

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

    <ProjectComponent title='Example Project' description='this is an example project'/>

    </div>
  );
}
export default Portfolio;