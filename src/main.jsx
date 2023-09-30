import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/global.css';
import LoginCtxProvider from './context/UserContext.jsx';
import ModeCtxProvider from './context/ModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeCtxProvider>
      <LoginCtxProvider>
        <App />
      </LoginCtxProvider>
    </ModeCtxProvider>
  </React.StrictMode>
);
