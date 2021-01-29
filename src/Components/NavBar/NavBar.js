import React from 'react';

import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

import './NavBar.css';
import {
  AppBar,
  // Typography,
  IconButton,
  Button,
  Toolbar,
  // Icons,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


function Nav() {


  return (
    <div className='NavBar'>
      <AppBar>
        <Toolbar>

        <Link
        to="about-me"
        smooth={true}>
          <Button>
            About Me
          </Button>
        </Link>


        <Link
        to="portfolio"
        smooth={true}>
          <Button
          >
            Portfolio
          </Button>
        </Link>

        <Link
        to="links"
        smooth={true}>
          <Button>
            Links
          </Button>
        </Link>

        <Link
        to="friends"
        smooth={true}>
          <Button>
            Friends
          </Button>
        </Link>

        <Link
        to="gallery"
        smooth={true}>
          <Button>
            Gallery
          </Button>
        </Link>

        {/* <Button>
          Contact
        </Button> */}

          {/* <IconButton>
            <MenuIcon />
          </IconButton> */}
{/*           
          <Typography>
            You are here:
          </Typography> */}

        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}
// export default connect(mapStoreToProps)(Nav);
export default Nav;