import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import {
  AppBar,
  // Typography,
  // IconButton,
  Button,
  Toolbar,
  useScrollTrigger,
  Fab,
  Hidden,
  Drawer,
  // withWidth,
  IconButton,
  // Icons,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// would like to better understand this...
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import MenuIcon from '@material-ui/icons/Menu';

// ...and this...
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const drawerWidth = 240;

// BEGIN Scroll FAB
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  // ...and how to nix this...
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
// END Scroll FAB



// Navbar function
function Nav(props) {

  const theme = useTheme();
  // hook for our drawer
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className='NavBar'
    id="back-to-top-anchor">
      <AppBar>
        <Toolbar className="ToolBar">

        {/* Hamburger Menu */}
        <Hidden smUp>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              // className={clsx(classes.menuButton, open && classes.hide)}
              >
            <MenuIcon />
          </IconButton>
          
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            
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

          </Drawer> 
        </Hidden>
        {/* END Hamburger Menu */}

        {/* Links */}
        <Hidden xsDown>
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
        </Hidden>


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