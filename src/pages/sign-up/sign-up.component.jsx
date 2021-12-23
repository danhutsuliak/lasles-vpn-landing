import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';

import './sign-up.styles.scss';

const SignUpPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {};

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="header">Sign Up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={userCredentials.displayName}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={userCredentials.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={userCredentials.password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={userCredentials.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
