import React from 'react';
import logo from '../src/keep-512.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <>
    <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
      <div className='header'>
        <img src={logo}  alt="logo"  height="70"  width="50" className='img'/>
        <h1> Google Keep</h1>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Header;