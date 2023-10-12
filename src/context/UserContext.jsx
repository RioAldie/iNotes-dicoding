import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAccessToken, getUserLogged } from '../utils/network-data';

const user = JSON.parse(localStorage.getItem('currentUser'));

const initialState = {
  currentUser: user !== null ? user : null,
};

export const loginCtx = createContext(initialState);

const LoginCtxProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    initialState.currentUser
  );

  return (
    <loginCtx.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </loginCtx.Provider>
  );
};

LoginCtxProvider.propTypes = {
  children: PropTypes.element,
};
export default LoginCtxProvider;
