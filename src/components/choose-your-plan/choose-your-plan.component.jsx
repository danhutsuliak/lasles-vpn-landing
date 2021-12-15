import React from 'react';

import './choose-your-plan.styles.scss';
import freePlanImage from '../../assets/free-plan.png';
import standartPlanImage from '../../assets/standart-plan.png';
import premiumPlanImage from '../../assets/premium-plan.png';
import { ReactComponent as CustomMarker } from '../../assets/plan-marker.svg';

const ChooseYourPlan = () => (
  <div className="choose-your-plan">
    <div className="text-container">
      <h2>Choose Your Plan</h2>
      <p>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
    </div>
    <div className="plan-cards-container">
      <div className="plan-card">
        <div className="card-top">
          <img src={freePlanImage} alt="free plan" />
          <h3>Free Plan</h3>
          <ul>
            <div className="list-item">
              <CustomMarker />
              Unlimited Bandwitch
            </div>
            <div className="list-item">
              <CustomMarker />
              Encrypted Connection
            </div>
            <div className="list-item">
              <CustomMarker />
              No Traffic Logs
            </div>
            <div className="list-item">
              <CustomMarker />
              Works on All Devices
            </div>
          </ul>
        </div>
        <div className="card-bottom">
          <h2>Free</h2>
          <div className="button">Select</div>
        </div>
      </div>
      <div className="plan-card">
        <div className="card-top">
          <img src={standartPlanImage} alt="standart plan" />
          <h3>Standart Plan</h3>
          <ul>
            <div className="list-item">
              <CustomMarker />
              Unlimited Bandwitch
            </div>
            <div className="list-item">
              <CustomMarker />
              Encrypted Connection
            </div>
            <div className="list-item">
              <CustomMarker />
              No Traffic Logs
            </div>
            <div className="list-item">
              <CustomMarker />
              Works on All Devices
            </div>
            <div className="list-item">
              <CustomMarker />
              Connect Anywhere
            </div>
          </ul>
        </div>
        <div className="card-bottom">
          <h2>
            $9 <span>/ mo</span>
          </h2>
          <div className="button">Select</div>
        </div>
      </div>
      <div className="plan-card premium">
        <div className="card-top">
          <img src={premiumPlanImage} alt="premium plan" />
          <h3>Premium Plan</h3>
          <ul>
            <div className="list-item">
              <CustomMarker />
              Unlimited Bandwitch
            </div>
            <div className="list-item">
              <CustomMarker />
              Encrypted Connection
            </div>
            <div className="list-item">
              <CustomMarker />
              No Traffic Logs
            </div>
            <div className="list-item">
              <CustomMarker />
              Works on All Devices
            </div>
            <div className="list-item">
              <CustomMarker />
              Connect Anywhere
            </div>
            <div className="list-item">
              <CustomMarker />
              Get New Features
            </div>
          </ul>
        </div>
        <div className="card-bottom">
          <h2>
            $12 <span>/ mo</span>
          </h2>
          <div className="button">Select</div>
        </div>
      </div>
    </div>
  </div>
);

export default ChooseYourPlan;
