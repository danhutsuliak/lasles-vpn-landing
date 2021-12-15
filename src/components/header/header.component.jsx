import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import LogoLink from '../logo-link/logo-link.component';

const Header = () => (
  <header>
    <LogoLink />
    <div className="options">
      <Link className="option" to="/about">
        About
      </Link>
      <Link className="option" to="/features">
        Features
      </Link>
      <Link className="option" to="/pricing">
        Pricing
      </Link>
      <Link className="option" to="/testimonials">
        Testimonials
      </Link>
      <Link className="option" to="/help">
        Help
      </Link>
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
