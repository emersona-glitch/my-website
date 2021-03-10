import React from 'react';
import './ProjectComponent.css';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core'
import screenshot from './screenshot.png';



function ProjectComponent(props) {
  // we want each of these guys to have:
  
  // a title
  // a screenshot
  // descriptive text
  // a 'view repo' button


  return (
    <div className='project-component'
    name="project-component">

    <Paper>
  
      {/* Title */}
      <Typography
      variant='h6'>
        {props.title}
      </Typography>

      {/* Screenshot */}
      <img alt='project screenshot' id='screenshot' src={screenshot}/>
      
      {/* Description */}
      <Typography>
        {props.description}
      </Typography>

      {/* View Repo button */}
        <a href='https://github.com/emersona-glitch/my-website' target="_blank" rel="noreferrer">
      <Button>
           View Repository
      </Button>
           </a>

    </Paper>

    </div>
  );
}

export default ProjectComponent;