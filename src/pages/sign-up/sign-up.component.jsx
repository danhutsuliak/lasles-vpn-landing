import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import UserContext from '../../contexts/user/user.context';

import './sign-up.styles.scss';

const USER_ERROR_MESSAGES = {
  'auth/user-not-found': 'User not found. Please try again',
  'auth/wrong-password': 'Wrong password. Please try again',
  'auth/weak-password': 'Password should be at least 6 characters.',
  'auth/email-already-in-use': 'Email is already used.',
  '': '',
};

const SignUpPage = () => {
  const { user, signUpUser } = useContext(UserContext);

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    function handleError() {
      setErrorMessage(
        USER_ERROR_MESSAGES[user.error.code]
          ? USER_ERROR_MESSAGES[user.error.code]
          : user.error.message.slice(10)
      );
    }
    if (user.error && user.error.type === 'sign-up') {
      handleError();
    }
    return () => {
      user.error = null;
    };
  }, [user]);

  const { email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

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
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <p className="error-message">{errorMessage}</p>

        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
