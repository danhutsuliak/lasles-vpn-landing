import React from 'react';

import './landing.styles.scss';
import personBrowsing from '../../assets/person-browsing.png';

const Landing = () => (
  <div className="landing">
    <div className="info-container">
      <h1 className="header">
        Want anything to be easy with <span className="bold">LaslesVPN.</span>
      </h1>
      <p className="sub-header">
        Provide a network for all your needs with ease and fun using
        <span className="bold"> LaslesVPN </span>
        discover interesting features from us.
      </p>
      <button>Get Started</button>
    </div>
    <div className="img-container">
      <img src={personBrowsing} alt="person with a laptop" />
    </div>
  </div>
);

export default Landing;
