import React from 'react';
import './Portfolio.css';
import {
  Paper,
  Typography,

} from '@material-ui/core'

import ProjectComponent from '../ProjectComponent/ProjectComponent'

function Filler() { 
  return (
    <div>
<Paper>
<Typography>
  Filler project :-/
</Typography>
</Paper>
</div>
)}

function Portfolio() {


  return (
    <div className='portfolio'
    name="portfolio">
    <Typography>
      Here are all the projects I've made!
    </Typography>
    
    
    {/* turn this into a component */}
    <Paper>
      <Typography>
        Filler project :-/
      </Typography>
    </Paper>

    <Filler/>
    <ProjectComponent donkey='myName'/>
    <ProjectComponent donkey='yourName'/>

    </div>
  );
}
export default Portfolio;