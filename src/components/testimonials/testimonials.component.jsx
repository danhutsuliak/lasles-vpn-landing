// import React, { useContext, useState } from 'react';
import React, { useEffect, useState } from 'react';
// import { TestimonialContext } from '../../contexts/testimonial.context.js';
import Testimonial from '../testimonial/testimonial.component';

import './testimonials.styles.scss';

import { db, getTestimonials } from '../../firebase/firebase.utils.js';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0.375);
  const [testimonials, setTestimonials] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    getTestimonials(db).then((testimonials) => {
      setTestimonials(testimonials);
    });
    setFetching(false);
  }, []);

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
        <h2 className="header">Trusted by Thousands of Happy Customer</h2>
        <p className="sub-header">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          {isFetching
            ? 'Loading'
            : testimonials.map((t) => (
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
      </div>
      <div className="indicators">
        <div className="page-count">
          <div className={`circle ${activeIndex === 0.375 ? 'current' : ''}`} />

          <div
            className={`circle ${activeIndex === 0.1875 ? 'current' : ''}`}
          />

          <div className={`circle ${activeIndex === 0 ? 'current' : ''}`} />

          <div
            className={`circle ${activeIndex === -0.1875 ? 'current' : ''}`}
          />

          <div
            className={`circle ${activeIndex === -0.375 ? 'current' : ''}`}
          />
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
