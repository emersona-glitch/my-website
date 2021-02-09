import React from 'react';
import './ProjectComponent.css';
import {
  Paper,
  Typography,

} from '@material-ui/core'

function ProjectComponent(props) {


  return (
    <div className='project-component'
    name="project-component">
    
    <Paper>
      <Typography>
        Filler project {props.donkey}
      </Typography>
    </Paper>

    </div>
  );
}

export default ProjectComponent;