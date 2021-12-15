import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import './logo-link.styles.scss';

const LogoLink = () => (
  <Link className="logo" to="/">
    <LogoImg />
    <div className="logo-text">
      Lasles<span className="bold">VPN</span>
    </div>
  </Link>
);

export default LogoLink;
