// import logo from './logo.svg';
import React from 'react';
import './App.css';

import NavBar from '../NavBar/NavBar';
import Greetings from '../Greetings/Greetings'
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Links from '../Links/Links';
import Friends from '../Friends/Friends';
import Gallery from '../Gallery/Gallery';
import ContactMe from '../ContactMe/ContactMe';

function App() {

  return (
    // ThemeProvider
    // Router??


    <div className="App">

      <NavBar />
      
      <Greetings />
      <AboutMe />
      <Portfolio />
      <Links />
      <Friends />
      <Gallery />

      <ContactMe />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
                </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <NavBar/> */}

    </div>
  );
}

export default App;
