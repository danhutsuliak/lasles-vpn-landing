import React from 'react';

import './locations.styles.scss';

import locationsImage from '../../assets/locations.png';
import companiesImage from '../../assets/companies.png';

const Locations = () => (
  <div className="locations">
    <h2 className="header">Huge Global Network of Fast VPN</h2>
    <p className="sub-header">
      See <span className="bold">LaslesVPN</span> everywhere to make it easier
      for you when you move locations.
    </p>
    <img src={locationsImage} alt="Locations" />
    <img className="companies" src={companiesImage} alt="Companies" />
  </div>
);

export default Locations;
