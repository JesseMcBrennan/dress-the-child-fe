import React from 'react';
import './NavMain.css';

const NavMain = () => {
  return(
    <div className="navMain">
      <div className="navLogo"></div>
        <ul className="NavMain-buttons">
          <li><a href="" className="NavMain-a">HOME</a></li>
          <li><a href="" className="NavMain-a">ABOUT</a></li>
          <li><a href="" className="NavMain-a">DONATE</a></li>
          <li><a href="" className="NavMain-a">OUR MISSON</a></li>
          <li><a href="" className="NavMain-a">PARTNERS</a></li>
        </ul>
    </div>
  )
}

export default NavMain;