import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAccessToken, getUserLogged } from '../utils/network-data';

const mode = localStorage.getItem('mode');
const initialState = {
  darkMode: mode != 'dark' ? 'light' : 'dark',
};

export const modeCtx = createContext(initialState);

const ModeCtxProvider = ({ children }) => {
  const [mode, setMode] = useState(initialState.darkMode);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);
  return (
    <modeCtx.Provider value={{ mode, setMode }}>
      {children}
    </modeCtx.Provider>
  );
};

ModeCtxProvider.propTypes = {
  children: PropTypes.element,
};
export default ModeCtxProvider;
