import React from 'react';

import './footer.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Footer = () => (
  <footer>
    <div className="about">
      <div className="logo-container">
        <Logo />
        <div className="logo-text">
          Lasles<span className="bold">VPN</span>
        </div>
      </div>
      <p className="description">
        <span className="bold">LaslesVPN</span> is a private virtual network
        that has unique features and has high security.
      </p>
      <div className="social-icons">
        <img
          className="icon"
          src="./images/facebook.svg"
          alt="facebook"
          href="https://facebook.com/"
        ></img>
        <img
          className="icon"
          src="./images/twitter.svg"
          alt="twitter"
          href="https://twitter.com/"
        ></img>
        <img
          className="icon"
          src="./images/instagram.svg"
          alt="instagram"
          href="https://instagram.com/"
        ></img>
      </div>
      <p className="copyright">
        ©2020Lasles<span>VPN</span>
      </p>
    </div>
    <div className="options">
      <div className="block">
        <h4>Product</h4>
        <p>Download</p>
        <p>Pricing</p>
        <p>Locations</p>
        <p>Server</p>
        <p>Countries</p>
        <p>Blog</p>
      </div>
      <div className="block">
        <h4>Engage</h4>
        <p>LaslesVPN ?</p>
        <p>FAQ</p>
        <p>Tutorials</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="block">
        <h4>Earn Money</h4>
        <p>Affiliate</p>
        <p>Become Partner</p>
      </div>
    </div>
  </footer>
);

export default Footer;
