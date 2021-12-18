import React from 'react';

import Features from '../../components/features/features.component';
import Locations from '../../components/locations/locations.component';
import Stats from '../../components/stats/stats.component';

import './about.styles.scss';

const About = () => (
  <div className="about">
    <Features />
    <Stats />
    <Locations />
  </div>
);

export default About;
