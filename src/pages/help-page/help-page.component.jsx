import React, { useEffect, useState } from 'react';

import './help-page.styles.scss';

import Faq from '../../components/faq/faq.component';
import { db, getFaqs } from '../../firebase/firebase.utils';

const HelpPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    getFaqs(db)
      .then((faqs) => setFaqs(faqs))
      .catch((err) => console.log(err));
    setFetching(false);
  }, []);

  return (
    <div className="help-page">
      <h2 className="header">Help</h2>
      {isFetching
        ? 'Loading...'
        : faqs.map((faq) => (
            <Faq key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
    </div>
  );
};

export default HelpPage;
