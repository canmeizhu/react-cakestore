import React from 'react';
import '../css/Welcome.css';
import '../css/Common.css';

const Welcome = () => (
  <div className='welcome'>
    <p className='title-left title-up'>Welcome to <span className='title-right'>Grandma's</span></p>
    <a href="#store" className="button big-size">EXPLORE</a>
  </div>
)

export default Welcome;