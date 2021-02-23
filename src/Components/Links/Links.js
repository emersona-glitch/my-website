import React from 'react';
import './Links.css';
import {
  Grid,
  Container,
  Typography
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { Link, Router } from 'react-router-dom';

// this line adds the entire library of FAB icons into what we can
// call up using the FontAwesomeIcon component
library.add(fab)

function Links() {


  return (
    <div 
    className='links'
    name='links'>
        
        <Container>
          <Typography
          variant='h4'>
            Links
          </Typography>
          <br/>
          <Typography>
            Here are some links to other places that I'm present on the internet.
          </Typography>
        </Container>
        <br/>
        <br/>
        <br/>

        <Grid container >

{/* spacing={1} */}

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={3}>
                <a href='https://www.linkedin.com/in/emerson-aagaard/' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon size='6x' icon={['fab', 'linkedin']}/>
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href='https://github.com/emersona-glitch' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon size='6x' icon={['fab', 'github']}/>
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href='https://soundcloud.com/emerson-aagaard' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon size='6x' icon={['fab', 'soundcloud']}/>
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href='https://bandcamp.com/emersona91' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon size='6x' icon={['fab', 'bandcamp']}/>
                </a>
              </Grid>
                </Grid>
            </Grid>
          <Grid item xs={3}></Grid>

        </Grid>

    </div>
  );
}
export default Links;