import React from 'react';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => (
  <header>
    <div className="logo-container">
      <Logo />
      <div className="logo-text">
        Lasles<span className="bold">VPN</span>
      </div>
    </div>
    <div className="options">
      <div className="option">About</div>
      <div className="option">Features</div>
      <div className="option">Pricing</div>
      <div className="option">Testimonials</div>
      <div className="option">Help</div>
    </div>
    <div className="sign-in-sign-up-container">
      <div className="sign-in">Sign In</div>
      <div className="sign-up">Sign Up</div>
    </div>
  </header>
);

export default Header;
