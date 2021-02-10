import React from 'react';
import './App.css';

// all of our children components
import NavBar from '../NavBar/NavBar';
import Greetings from '../Greetings/Greetings'
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Links from '../Links/Links';
import Friends from '../Friends/Friends';
import Gallery from '../Gallery/Gallery';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer'

// import Alert from '@material-ui/lab/Alert'

// This is a function component!
// you can tell because we're declaring a function ;)

// if you're used to class components, you can think of
// function components as representing just the render() portion
// of a class component
function App() {

  // how do we do a componentDidMount?


  // In order to have cleaner code, I'm only using App.js
  // as the root of our "component tree," so as you'll see
  // below, the only thing going on inside App() is
  // 
  return (
    // Do we want to use ThemeProvider?
    
    // Router??
    
    <div className="App">


      <NavBar />
      {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
      <Greetings />
      <AboutMe />
      <Portfolio />
      <Links />
      <Friends />
      <Gallery />
      <Footer />

      <ContactMe />

    </div>
  );
}

export default App;
