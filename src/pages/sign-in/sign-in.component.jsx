import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import UserContext from '../../contexts/user/user.context';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

import './sign-in.styles.scss';

const USER_ERROR_MESSAGES = {
  'auth/user-not-found': 'User not found. Please try again',
  'auth/wrong-password': 'Wrong password. Please try again',
  'auth/too-many-requests': 'Too many failed login attempts. Try again later.',
};

const SignInPage = () => {
  const { user, signInUser } = useContext(UserContext);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
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
    if (user.error && user.error.type === 'sign-in') {
      handleError();
    }
  }, [user]);

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    signInUser(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return user.currentUser ? (
    <Navigate replace to="/"></Navigate>
  ) : (
    <div className="sign-in">
      <h2 className="header">Sign In</h2>
      <form className="sign-in-form" onSubmit={handleSubmit}>
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

        <p className="error-message">{user.error && errorMessage}</p>

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
