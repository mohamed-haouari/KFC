import React from 'react';
import logo from '../../assets/img/vector.svg';
import './header.css';
import Menu from '../Menu';
import { Link } from "react-router-dom";

const Header = () => {
  return (
<>
<div className="headerWrapper">
        <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="auth-link">
    <ul>
        <li><Link to="/"><i class="bi bi-geo-alt-fill"></i>Store Locator</Link></li>
        <li><Link to="/login"><i class="bi bi-person-fill"></i>Signin/Register</Link></li>
        <li><Link to="/">My Account</Link></li>
        <li><Link to="/">Logout</Link></li>
    </ul>
        </div>
    </div>
    <Menu/>
    </>
  )
}

export default Header