import React from 'react';

import './features.styles.scss';
import personLaptopImage from '../../assets/person-pointing.png';
import { ReactComponent as CustomMarker } from '../../assets/feature-marker.svg';

const Features = () => (
  <div className="features">
    <img src={personLaptopImage} alt="person pointing at features" />
    <div className="info-container">
      <h2 className="header">We Provide Many Features You Can Use</h2>
      <p className="sub-header">
        You can explore the features that we provide with fun and have their own
        functions each feature.
      </p>
      <ul>
        <div className="list-item">
          <CustomMarker />
          <span>Powerful online protection.</span>
        </div>

        <div className="list-item">
          <CustomMarker />
          Internet without borders.
        </div>
        <div className="list-item">
          <CustomMarker />
          Supercharged VPN
        </div>
        <div className="list-item">
          <CustomMarker />
          No specific time limits.
        </div>
      </ul>
    </div>
  </div>
);

export default Features;
