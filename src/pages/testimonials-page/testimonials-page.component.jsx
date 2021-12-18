import React, { useContext } from 'react';
import SubscribeNow from '../../components/subscribe-now/subscribe-now.component';
import Testimonial from '../../components/testimonial/testimonial.component';
import { TestimonialContext } from '../../contexts/testimonial.context';

import './testimonials-page.styles.scss';

const TestimonialsPage = () => {
  const { testimonials } = useContext(TestimonialContext);

  return (
    <div className="testimonials-page">
      <div className="heading-text-container">
        <h2 className="header">Trusted by Thousands of Happy Customer</h2>
        <p className="sub-header">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="testimonials-container">
        {testimonials.map((t) => (
          <Testimonial
            key={t.id}
            name={t.name}
            location={t.location}
            image={t.image}
            rating={t.rating}
            text={t.text}
            isRed={t.isRed}
          />
        ))}
      </div>
      <SubscribeNow />
    </div>
  );
};

export default TestimonialsPage;
