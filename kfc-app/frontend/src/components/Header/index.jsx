import React from 'react';
import logo from '../../assets/img/vector.svg';
import './header.css';
import Menu from '../Menu';

const Header = () => {
  return (
<>
<div className="headerWrapper">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="auth-link">
    <ul>
        <li><a href=""><i class="bi bi-geo-alt-fill"></i>Store Locator</a></li>
        <li><a href=""><i class="bi bi-person-fill"></i>Signin/Register</a></li>
        <li><a href="">My Account</a></li>
        <li><a href="">Logout</a></li>
    </ul>
        </div>
    </div>
    <Menu/>
    </>
  )
}

export default Header