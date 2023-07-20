import React from 'react';


function Footer() {
    const year=new Date().getFullYear();
  return (
    <>
      <footer>
        <p>copy right reserved © {year}</p>
      </footer>
    </>
  );
}

export default Footer;