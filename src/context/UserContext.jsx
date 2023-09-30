import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAccessToken, getUserLogged } from '../utils/network-data';

const token = getAccessToken();
const initialState = {
  isLogin: token === null ? false : true,
};

export const loginCtx = createContext(initialState);

const LoginCtxProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(initialState.isLogin);

  const handleGetUserLogged = async () => {
    const user = await getUserLogged();

    if (user.error === false) {
      return setIsLogin(true);
    }

    return setIsLogin(false);
  };

  useEffect(() => {
    handleGetUserLogged();
  }, []);
  return (
    <loginCtx.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </loginCtx.Provider>
  );
};

LoginCtxProvider.propTypes = {
  children: PropTypes.element,
};
export default LoginCtxProvider;
