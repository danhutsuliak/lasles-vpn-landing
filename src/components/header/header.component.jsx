import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import LogoLink from '../logo-link/logo-link.component';

const Header = () => (
  <header>
    <LogoLink />
    <div className="options">
      <div className="anim">
        <Link className="option" to="about">
          About
        </Link>
      </div>
      <div className="anim">
        <Link className="option" to="features">
          Features
        </Link>
      </div>
      <div className="anim">
        <Link className="option" to="pricing">
          Pricing
        </Link>
      </div>
      <div className="anim">
        <Link className="option" to="testimonials">
          Testimonials
        </Link>
      </div>
      <div className="anim">
        <Link className="option" to="help">
          Help
        </Link>
      </div>
    </div>
    <div className="sign-in-sign-up-container">
      <Link className="sign-in" to="sign-in">
        Sign In
      </Link>
      <Link className="sign-up" to="sign-up">
        Sign Up
      </Link>
    </div>
  </header>
);

export default Header;
