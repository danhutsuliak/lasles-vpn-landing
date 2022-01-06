import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import UserContext from '../../contexts/user/user.context';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

import './sign-up.styles.scss';

const SignUpPage = () => {
  const { user, signUpUser } = useContext(UserContext);

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    signUpUser(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return user.currentUser ? (
    <Navigate replace to="/"></Navigate>
  ) : (
    <div className="sign-up">
      <h2 className="header">Sign Up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
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
