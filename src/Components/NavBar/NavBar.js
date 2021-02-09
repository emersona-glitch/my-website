import React from 'react';

// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

import './NavBar.css';
import {
  AppBar,
  // Typography,
  IconButton,
  Button,
  Toolbar,
  useScrollTrigger,
  Fab,
  // Icons,
} from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

// Scroll FAB
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function Nav(props) {

  return (
    <div className='NavBar'
    id="back-to-top-anchor">
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

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </div>
  );
}
// export default connect(mapStoreToProps)(Nav);
export default Nav;