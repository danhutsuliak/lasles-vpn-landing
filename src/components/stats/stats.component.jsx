import React from 'react';

import { ReactComponent as UserSVG } from '../../assets/user.svg';
import { ReactComponent as LocationSVG } from '../../assets/location.svg';
import { ReactComponent as ServerSVG } from '../../assets/server.svg';

import './stats.styles.scss';

const Stats = () => (
  <div className="stats">
    <div className="stat">
      <UserSVG />
      <div className="text">
        <div className="">
          <h2>90+</h2>
          <p>Users</p>
        </div>
      </div>
    </div>

    <div className="divider"></div>

    <div className="stat">
      <LocationSVG />
      <div className="text">
        <h2>30+</h2>
        <p>Locations</p>
      </div>
    </div>

    <div className="divider"></div>

    <div className="stat">
      <ServerSVG />
      <div className="text">
        <h2>50+</h2>
        <p>Servers</p>
      </div>
    </div>
  </div>
);

export default Stats;
