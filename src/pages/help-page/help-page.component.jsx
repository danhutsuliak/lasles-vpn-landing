import React, { useContext } from 'react';

import './help-page.styles.scss';

import Faq from '../../components/faq/faq.component';
import { FaqsContext } from '../../contexts/faqs.context';

const HelpPage = () => {
  const { faqs } = useContext(FaqsContext);

  return (
    <div className="help-page">
      <h2 className="header">Help</h2>
      {faqs.map((faq) => (
        <Faq key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default HelpPage;
