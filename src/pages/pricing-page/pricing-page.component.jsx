import React from 'react';
import ChooseYourPlan from '../../components/choose-your-plan/choose-your-plan.component';
import Features from '../../components/features/features.component';
import Locations from '../../components/locations/locations.component';

import './pricing-page.styles.scss';

const PricingPage = () => (
  <div className="pricing-page">
    <ChooseYourPlan />
    <Locations />
    <Features />
  </div>
);

export default PricingPage;
