import React from 'react';
import ChooseYourPlan from '../../components/choose-your-plan/choose-your-plan.component';
import Features from '../../components/features/features.component';
import Landing from '../../components/landing/landing.component';
import Locations from '../../components/locations/locations.component';
import Stats from '../../components/stats/stats.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import { TESTIMONIAL_DATA } from '../../data/testimonial.data';

import './landing-page.styles.scss';

const LandingPage = () => (
  <div className="landing-page">
    <section>
      <Landing />
      <Stats />
      <Features />
    </section>
    <section className="darker-bg-color">
      <div className="bg"></div>
      <ChooseYourPlan />
      <Locations />
      <Testimonials testimonials={TESTIMONIAL_DATA.testimonials} />
    </section>
  </div>
);

export default LandingPage;
