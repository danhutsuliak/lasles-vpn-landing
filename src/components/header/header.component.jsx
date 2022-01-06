import React, { useContext } from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import LogoLink from '../logo-link/logo-link.component';
import UserContext from '../../contexts/user/user.context';

const Header = () => {
  const { user, signOutUser } = useContext(UserContext);

  return (
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
        {user.currentUser ? (
          <>
            <p className="signed-user">{user.currentUser.email}</p>
            <button className="sign-out" onClick={signOutUser}>
              <div className="anim">Sign Out</div>
            </button>
          </>
        ) : (
          <>
            <Link className="sign-in-button" to="sign-in">
              Sign In
            </Link>
            <Link className="sign-up-button" to="sign-up">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
