import React from 'react';
import './NavMain.css';

const NavMain = () => {
  return(
    <div className="navMain">
      <div className="navLogo"></div>
        <ul className="NavMain-buttons">
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">DONATE</a></li>
          <li><a href="">OUR MISSON</a></li>
          <li><a href="">PARTNERS</a></li>
        </ul>
    </div>
  )
}

export default NavMain;