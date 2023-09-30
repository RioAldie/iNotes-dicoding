import { CssBaseline } from '@mui/material';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout';
import Note from './pages/Note';
import AddNote from './pages/AddNote';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useContext } from 'react';
import { loginCtx } from './context/UserContext';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff3d00',
    },
    secondary: {
      main: '#fff',
    },
    mode: 'dark',
  },
});

const App = () => {
  const { isLogin } = useContext(loginCtx);
  const RequireAuth = ({ children }) => {
    if (isLogin) {
      return <>{children}</>;
    }
    return <Navigate to={'/login'} />;
  };

  console.log(isLogin);

  RequireAuth.propTypes = {
    children: PropTypes.element,
  };
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/:id"
                element={
                  <RequireAuth>
                    <Note />
                  </RequireAuth>
                }
              />
              <Route
                path="/add"
                element={
                  <RequireAuth>
                    <AddNote />
                  </RequireAuth>
                }
              />
              <Route
                path="/archive"
                element={
                  <RequireAuth>
                    <Archive />
                  </RequireAuth>
                }
              />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
