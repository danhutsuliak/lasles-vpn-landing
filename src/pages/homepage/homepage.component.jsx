import React from 'react';
import ChooseYourPlan from '../../components/choose-your-plan/choose-your-plan.component';
import Features from '../../components/features/features.component';
import Landing from '../../components/landing/landing.component';
import Locations from '../../components/locations/locations.component';
import Stats from '../../components/stats/stats.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import SubscribeNow from '../../components/subscribe-now/subscribe-now.component';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <section>
        <Landing />
        <Stats />
        <Features />
      </section>
      <section className="darker-bg-color">
        <div className="bg"></div>
        <ChooseYourPlan />
        <Locations />
        <Testimonials />
      </section>
      <SubscribeNow />
    </div>
  );
};

export default HomePage;
