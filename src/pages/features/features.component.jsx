import React from 'react';
import ChooseYourPlan from '../../components/choose-your-plan/choose-your-plan.component';
import Features from '../../components/features/features.component';

import './features.styles.scss';

const FeaturesPage = () => (
  <div className="features-page">
    <Features />
    <ChooseYourPlan />
  </div>
);

export default FeaturesPage;
