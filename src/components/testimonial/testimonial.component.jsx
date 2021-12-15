import React from 'react';

import './testimonial.styles.scss';

import { ReactComponent as StarIcon } from '../../assets/star-icon.svg';

const Testimonial = ({ image, name, location, rating, text, isRed }) => (
  <div className={`testimonial ${isRed ? 'red' : ''}`}>
    <div className="user-container">
      <img src={image} alt="user" />
      <div className="name-location">
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
      <p className="rating">
        {rating}
        <StarIcon />
      </p>
    </div>
    <p className="text">{text}</p>
  </div>
);

export default Testimonial;
