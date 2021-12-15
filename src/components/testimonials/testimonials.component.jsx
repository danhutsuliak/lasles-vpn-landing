import React, { useState } from 'react';
import Testimonial from '../testimonial/testimonial.component';

import './testimonials.styles.scss';

const Testimonials = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0.375);

  const carouselStep = 0.1875;

  const updateIndex = (newIndex) => {
    if (newIndex < -0.375) {
      newIndex = -0.375;
    } else if (newIndex >= 0.375) {
      newIndex = 0.375;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="testimonials">
      <div className="text-container">
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p className="subheader">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          {testimonials.map((t) => (
            <Testimonial
              name={t.name}
              location={t.location}
              image={t.image}
              rating={t.rating}
              text={t.text}
              isRed={t.isRed}
            />
          ))}
        </div>
      </div>
      <div className="indicators">
        <div className="page-count">
          <div
            className={`circle ${activeIndex === 0.375 ? 'current' : ''}`}
          ></div>
          <div
            className={`circle ${activeIndex === 0.1875 ? 'current' : ''}`}
          ></div>
          <div className={`circle ${activeIndex === 0 ? 'current' : ''}`}></div>
          <div
            className={`circle ${activeIndex === -0.1875 ? 'current' : ''}`}
          ></div>
          <div
            className={`circle ${activeIndex === -0.375 ? 'current' : ''}`}
          ></div>
        </div>

        <div className="buttons">
          <div
            className="prev"
            onClick={() => {
              updateIndex(activeIndex + carouselStep);
            }}
          ></div>

          <div
            className="next"
            onClick={() => {
              updateIndex(activeIndex - carouselStep);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
