import React from 'react';

import './hero.styles.scss';
import personBrowsing from '../../assets/person-browsing.png';

const Hero = () => (
  <div className="hero">
    <div className="info-container">
      <h1 className="main-text">
        Want anything to be easy with <span className="bold">LaslesVPN.</span>
      </h1>
      <p>
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

export default Hero;
