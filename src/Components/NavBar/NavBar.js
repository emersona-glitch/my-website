import React from 'react';

import './NavBar.css';
import {
  AppBar,
  // Typography,
  IconButton,
  Toolbar,
  // Icons,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


function Nav() {


  return (
    <div className='NavBar'>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
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