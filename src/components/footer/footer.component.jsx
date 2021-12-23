import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo-link/logo-link.component';

import './footer.styles.scss';

const Footer = () => (
  <footer>
    <div className="footer-bg"></div>
    <div className="about-block">
      <Logo />
      <p className="description">
        <span className="bold">LaslesVPN</span> is a private virtual network
        that has unique features and has high security.
      </p>
      <div className="social-icons">
        <a href="https://facebook.com/">
          <img
            className="icon"
            src={process.env.PUBLIC_URL + '/images/facebook.svg'}
            alt="facebook"
          ></img>
        </a>
        <a href="https://twitter.com/">
          <img
            className="icon"
            src={process.env.PUBLIC_URL + '/images/twitter.svg'}
            alt="twitter"
          ></img>
        </a>
        <a href="https://instagram.com/">
          <img
            className="icon"
            src={process.env.PUBLIC_URL + '/images/instagram.svg'}
            alt="instagram"
          ></img>
        </a>
      </div>
      <p className="copyright">
        ©2020Lasles<span>VPN</span>
      </p>
    </div>
    <div className="options">
      <div className="block">
        <h4>Product</h4>
        <div className="anim">
          <Link to="download">Download</Link>
        </div>
        <div className="anim">
          <Link to="/">Pricing</Link>
        </div>
        <div className="anim">
          <Link to="/">Locations</Link>
        </div>
        <div className="anim">
          <Link to="/">Server</Link>
        </div>
        <div className="anim">
          <Link to="/">Countries</Link>
        </div>
        <div className="anim">
          <Link to="/">Blog</Link>
        </div>
      </div>
      <div className="block">
        <h4>Engage</h4>
        <div className="anim">
          <Link to="/">LaslesVPN ?</Link>
        </div>
        <div className="anim">
          <Link to="/">FAQ</Link>
        </div>
        <div className="anim">
          <Link to="/">Tutorials</Link>
        </div>
        <div className="anim">
          <Link to="/">About Us</Link>
        </div>
        <div className="anim">
          <Link to="/">Privacy Policy</Link>
        </div>
        <div className="anim">
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
      <div className="block">
        <h4>Earn Money</h4>
        <div className="anim">
          <Link to="/">Affiliate</Link>
        </div>
        <div className="anim">
          <Link to="/">Become Partner</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
