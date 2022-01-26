import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <label className="form-input">
    <input onChange={handleChange} required title="" {...otherProps} />
    {label ? (
      <span
        className={`${otherProps.value.length ? 'shrink' : ''} placeholder`}
      >
        {label}
      </span>
    ) : null}
  </label>
);

export default FormInput;
