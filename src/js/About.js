import React from 'react';
import '../css/About.css';
import '../css/Common.css';

const About = () => (
  <div id='about'>
    <div className='container left'>
      <div className='about-text'>
        <p className='title-left'>About<span className='title-right'> Us</span></p>
        <p className='about-detail'>We make every treat with care.We never use margarine or shortening – everything
        is handmade with quality ingredients: flaky croissants, moist cupcakes, homestyle cookies,
        and classic french patisserie style cakes. And so much more.</p>
        <a href="#store" className="button">EXPLORE</a>
      </div>
    </div>
    <div className='container right'>
      <div className='about-img'>
        <img src="/img/sweets-1.jpeg" className="img-a" alt="" />
      </div>
    </div>
  </div>
)

export default About;