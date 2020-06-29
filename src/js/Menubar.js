import React from 'react';
import '../css/Menubar.css';
import Logo from '../js/Logo';

const Menubar = (props) => (
  <div className='menuBar flexBox'>
    <div className='flexBox'>
      {/* React中img不能像html那样直接使用svg图片，而是要另外做一个ReactJS控件，把svg中的代码拷贝进去
      <a href=''><img src='../src/img/logo.svg' alt='logo'></img></a> */}
      <Logo />
      <div className='menuContainer flexBox'>
        <a href='' className='menuText'>Home</a>
        <a href='#about' className='menuText'>About</a>
        <a href='#store' className='menuText'>Store</a>
        <a href='#contact' className='menuText'>Contact</a>
      </div>
    </div>
    <div className='menuCart flexBox'>
      <div className="tel">
        <span className="menuCart-img"><i className="fa fa-phone"></i></span>
        <p>123 456 789</p>
      </div>
      <span className="menuCart-num" onClick={props.openCartWindow}><i className="fa fa-shopping-cart"></i><span className="itemNumber">&nbsp;{props.cartItemNumber}</span></span>
    </div>
  </div>)

export default Menubar;