import React from 'react';
import logo from '../src/logo.svg';

function Header() {
  return (
    <>
      <div className='header'>
        <img src={logo}  alt="logo"  height="70"  width="50" className='img'/>
        <h1> Google Keep</h1>
      </div>
    </>
  );
}

export default Header;