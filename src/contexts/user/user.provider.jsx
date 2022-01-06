import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import UserContext from './user.context';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ currentUser: null, error: null });

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setUser({
          currentUser: userCredential.user,
        });
      })
      .catch((error) => {
        console.log({ error });
        setUser({
          currentUser: null,
          error: error,
        });
      });
  };

  const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('userCredential.user = ' + userCredential.user);
        setUser({
          currentUser: userCredential.user,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({ currentUser: null });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider value={{ user, signInUser, signUpUser, signOutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
