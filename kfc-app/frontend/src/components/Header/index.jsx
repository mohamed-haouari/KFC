import React from 'react';
import logo from '../../assets/img/vector.svg';

const Header = () => {
  return (
    <div className="headerWrapper">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="auth-link">
    <ul>
        <li><a href="">Store Locator</a></li>
        <li><a href="">Signin/Register</a></li>
    </ul>
        </div>
    </div>
  )
}

export default Header