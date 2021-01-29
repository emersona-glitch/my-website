import React from 'react';
import './AboutMe.css';
import selfie from './selfie.jpg';

function AboutMe() {


  return (
    <div 
    className='about-me'
    name='about-me'>
      <img id='selfie' src={selfie}/>
      <p>Let me tell you about me</p>
    </div>
  );
}
export default AboutMe;