import React from 'react';
import './ProjectComponent.css';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core'

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
      <Typography>
        Filler project {props.donkey}
      </Typography>

      {/* Screenshot */}
      <img/>
      
      {/* Description */}
      <Typography>
        Filler project {props.donkey}
      </Typography>

      {/* View Repo button */}
        <a href="www.google.com">
      <Button>
           Heh 
      </Button>
           </a>

    </Paper>

    </div>
  );
}

export default ProjectComponent;