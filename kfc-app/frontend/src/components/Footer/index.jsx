import React from 'react'
import footerLogo from '../../assets/img/footer-logo.png'
import playStore from '../../assets/img/google-play.png'
import appStore from '../../assets/img/app-store.png'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <img className="footer-logo" src={footerLogo} alt="" />
        <div className="row footer-inner">
            <div className="col-md-2">
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
            </div>
            <div className="col-md-2">
            <ul>
                    <li><a href="">Food</a></li>
                    <li><a href="">Our secret recipe</a></li>
                </ul>
            </div>
            <div className="col-md-2">
            <ul>
                    <li><a href="">Location</a></li>
                    <li><a href="">Find a store</a></li>
                </ul>
            </div>
            <div className="col-md-2">
            <ul>
                    <li><a href="">Get in Touch</a></li>
                    <li><a href="">Join us</a></li>
                    <li><a href="">Term and conditions</a></li>
                </ul>
            </div>
            <div className="col-md-4">
            <ul>
                    <li><a href=""><img src={playStore} alt="" /></a></li>
                    <li><a href=""><img src={appStore} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer