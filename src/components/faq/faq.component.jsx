import React, { useState } from 'react';

import './faq.styles.scss';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const Faq = ({ question, answer }) => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={`faq ${isActive ? 'active' : ''}`} onClick={handleToggle}>
      <div className="question">
        <h3>{question}</h3>

        <Arrow />
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
